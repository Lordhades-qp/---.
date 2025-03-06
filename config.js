// config.js
module.exports = {
  // Préfixe des commandes du bot
  prefix: '!',

  // Nom du bot
  botName: '𝗔𝗧𝗢𝗠𝗜𝗖-𝗕𝗢𝗧',

  // Nom de l'auteur du bot
  author: 'Mastermind & ᴍᴜʀᴘʜʏ᭄ғғ⚠️',

  // Message de bienvenue pour les nouveaux utilisateurs
  welcomeMessage: 'Bienvenue sur 𝗔𝗧𝗢𝗠𝗜𝗖-𝗕𝗢𝗧, comment puis-je vous aider ?',

  // Version du bot
  version: '1.0.0',

  // ID du créateur (si applicable)
  ownerId: '2250565647864',

  // Configuration des logs
  logging: {
    enabled: true,  // Activer ou désactiver les logs
    logFile: 'assets/logs.txt',  // Chemin du fichier de log
  },

  // Médias pour le bot
  media: {
    logo: 'assets/logo.png',  // Chemin de l'image du logo
    notificationSound: 'assets/notification.mp3',  // Son de notification
    errorSound: 'assets/error.mp3',  // Son d'erreur
  },

  // Commandes disponibles pour le bot
  commands: {
    help: 'Affiche l’aide du bot',
    status: 'Affiche le statut du bot',
    menu: 'Affiche le menu principal',
    ping: 'Vérifie si le bot est actif',
  },

  // Paramètres de langue
  language: {
    default: 'fr',  // Langue par défaut
    available: ['fr', 'en'],  // Langues disponibles
  },

  // API configuration (si applicable sans token)
  api: {
    baseUrl: 'https://api.whatsapp.com',  // URL de l'API WhatsApp (exemple)
    version: 'v1',  // Version de l'API
  },
};
