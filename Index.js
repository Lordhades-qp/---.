const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const path = require('path');
const config = require('./config'); // Assurez-vous que config.js est bien configuré

const client = new WAConnection();

const commands = new Map(); // Stockage des commandes

// Chargement des commandes depuis le dossier 'commands'
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
}

client.on('open', () => {
    console.log('✅ Bot connecté avec succès !');
});

client.on('chat-update', async (chat) => {
    if (!chat.hasNewMessage) return;
    const message = chat.messages.all()[0];

    if (!message.message) return;
    const messageType = Object.keys(message.message)[0];

    if (messageType !== 'conversation' && messageType !== 'extendedTextMessage') return;

    const from = message.key.remoteJid;
    const text = message.message.conversation || message.message.extendedTextMessage.text;
    const args = text.trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commands.has(commandName)) {
        try {
            await commands.get(commandName).execute(client, { from, sender: message.key.participant }, args);
        } catch (error) {
            console.error(`❌ Erreur dans la commande ${commandName}:`, error);
            client.sendMessage(from, '⚠️ Une erreur est survenue lors de l\'exécution de la commande.', MessageType.text);
        }
    }
});

// Connexion du bot
async function startBot() {
    await client.connect();
    fs.writeFileSync('./auth_info.json', JSON.stringify(client.base64EncodedAuthInfo(), null, 2));
}

startBot().catch(err => console.error('Erreur lors de la connexion du bot :', err));
