const settings = require('./settings');

module.exports = {
  name: 'bigmenu',
  description: 'Affiche un menu détaillé avec plusieurs sections.',
  async execute(client, message, args) {
    const user = message.sender;
    const userSettings = settings.userSettings[user] || { language: 'fr' };
    const menu = userSettings.language === 'en' ? "Welcome to ATOMIC-BOT" : "Bienvenue sur ATOMIC-BOT";

    const bigMenu = `
      *${menu}, ${user}!*

      *Voici un grand menu avec toutes les fonctionnalités disponibles :*
      // Autres options
    `;
    
    // Envoi du message avec le grand menu
    await client.sendMessage(message.from, bigMenu, MessageType.text);
  }
};
