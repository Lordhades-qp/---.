const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const Pino = require('pino');
const fs = require('fs');
const path = require('path');

// 📌 Chargement de la session
const sessionPath = path.join(__dirname, 'session'); // Dossier session
fs.existsSync(sessionPath) || fs.mkdirSync(sessionPath); // Création si inexistant

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    
    const sock = makeWASocket({
        auth: state,
        logger: Pino({ level: 'silent' }),
        printQRInTerminal: true, // Afficher le QR code dans le terminal
    });

    // 📌 Sauvegarde des credentials
    sock.ev.on('creds.update', saveCreds);

    // 📌 Événement lors de la connexion
    sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
        if (connection === 'close') {
            console.log('[⚠] Connexion fermée, tentative de reconnexion...');
            startBot(); // Relancer le bot en cas de déconnexion
        } else if (connection === 'open') {
            console.log('[✅] Connecté à WhatsApp !');
        }
    });

    // 📌 Gestion des messages entrants
    sock.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const chatId = msg.key.remoteJid;
        const messageText = msg.message.conversation || msg.message.extendedTextMessage?.text || '';

        console.log(`[💬] Message reçu : ${messageText}`);

        // 📌 Commandes
        if (messageText.startsWith('!ping')) {
            await sock.sendMessage(chatId, { text: 'Pong !' });
        } else if (messageText.startsWith('!menu')) {
            await sock.sendMessage(chatId, { text: '📜 Menu :\n1. !ping\n2. !menu' });
        }
    });
}

startBot();
