// index.js

// Charger les modules nécessaires
const { Client } = require('whatsapp-web.js'); // Client WhatsApp
const fs = require('fs'); // Pour gérer les fichiers
const qrcode = require('qrcode-terminal'); // Générer le QR code pour l'authentification
const config = require('./config.js'); // Charger la configuration du bot

// Initialiser le client WhatsApp
const client = new Client();

// Afficher le QR code pour l'authentification
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Scannez le QR code ci-dessus pour connecter votre WhatsApp');
});

// Une fois que le client est prêt, on l'informe que le bot est en ligne
client.on('ready', () => {
    console.log(`${config.botName} est maintenant en ligne !`);
});

// Lorsque le bot reçoit un message, il effectue une action en fonction de la commande
client.on('message', (message) => {
    // Récupérer le contenu du message et le préfixe
    const content = message.body.toLowerCase();
    
    // Commande de ping pour vérifier si le bot fonctionne
    if (content === `${config.prefix}ping`) {
        message.reply('Pong! Le bot fonctionne parfaitement.');
    }

    // Commande pour afficher le menu
    if (content === `${config.prefix}menu`) {
        message.reply('Chargement du menu...\n[░░░░░░░░░░] 0%\n[██░░░░░░░░] 25%\n[████░░░░░░] 50%\n[██████░░░░] 75%\n[██████████] 100%\n\nVoici le menu principal:\n1. Aide\n2. Statut\n3. Ping');
    }

    // Commande pour afficher l'aide
    if (content === `${config.prefix}help`) {
        message.reply('Voici la liste des commandes disponibles :\n1. !ping - Vérifie si le bot fonctionne\n2. !menu - Affiche le menu principal\n3. !status - Affiche le statut du bot');
    }

    // Commande pour afficher le statut du bot
    if (content === `${config.prefix}status`) {
        message.reply(`${config.botName} est en ligne et fonctionne normalement. Version: ${config.version}`);
    }
});

// Gérer les erreurs du client
client.on('error', (err) => {
    console.error('Erreur survenue :', err);
});

// Démarrer le client WhatsApp
client.initialize();
