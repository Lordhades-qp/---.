const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const config = require('./config');  // Assurez-vous que le chemin est correct
const menuCommand = require('./src/command/menu');  // Chemin pour le fichier menu.js
const settingsCommand = require('./src/command/settings');  // Chemin pour le fichier settings.js

const client = new WAConnection();

client.on('open', () => {
  console.log(`Connexion établie avec le numéro : ${client.user.jid}`);
  console.log(`Bot connecté avec succès !`);
});

// Connexion et authentification du bot
client.on('qr', qr => {
  console.log('QR Code à scanner : ', qr);
});

client.on('message-new', async (message) => {
  try {
    const from = message.key.remoteJid;  // L'identifiant du chat
    const content = message.message;  // Contenu du message
    const sender = message.key.fromMe ? client.user.jid : message.key.remoteJid; // L'expéditeur du message
    const textMessage = content ? content.text || '' : '';  // On prend uniquement les messages texte

    const args = textMessage.trim().split(' ');  // Découpe le message en arguments

    // Si le message commence par le préfixe du bot (par exemple "/")
    if (textMessage.startsWith('/')) {
      const command = args[0].slice(1).toLowerCase();  // La commande sans le "/"

      // Gestion des commandes principales
      switch (command) {
        case 'menu':
          await menuCommand.execute(client, message, args);
          break;
        case 'settings':
          await settingsCommand.execute(client, message, args);
          break;
        default:
          // Si la commande n'est pas reconnue
          await client.sendMessage(from, 'Commande inconnue. Tapez /menu pour afficher le menu.', MessageType.text);
          break;
      }
    }

  } catch (error) {
    console.error('Erreur lors du traitement du message :', error);
  }
});

// Connexion et authentification avec l'API WhatsApp
async function startBot() {
  const session = require('./session.json');  // Chargement de la session pour éviter le scan du QR chaque fois

  try {
    // Si une session existante est disponible
    await client.loadAuthInfo(session);
    await client.connect();
  } catch (error) {
    console.log('Aucune session trouvée, demande de QR...');
    await client.connect();
  }

  // Sauvegarde de la session une fois connectée
  client.on('chat-update', async (chatUpdate) => {
    if (chatUpdate) {
      const sessionData = client.base64EncodedAuthInfo();
      require('fs').writeFileSync('./session.json', JSON.stringify(sessionData));
    }
  });
}

// Lancer le bot
startBot();
