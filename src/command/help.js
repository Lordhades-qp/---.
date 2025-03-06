const { MessageType } = require('@adiwajshing/baileys');
const config = require('./config');

module.exports = {
  name: 'help',
  description: 'Affiche l\'aide pour utiliser le bot.',
  async execute(client, message, args) {
    const user = message.sender;
    const helpMessage = `
      *Bienvenue sur 𝗔𝗧𝗢𝗠𝗜𝗖-𝗕𝗢𝗧, ${user}!*

      *Voici la liste des commandes disponibles :*

      🌐 *Comptabilité et Finances :*
      - ${config.menu.comptabilite} : Affiche les informations comptables de votre entreprise.
      - ${config.menu.solde} : Vérifiez votre solde et vos transactions financières.
      - ${config.menu.investir} : Recevez des conseils pour investir de manière judicieuse.
      - ${config.menu.historique} : Consultez votre historique financier.

      📚 *Révisions et Études :*
      - ${config.menu.revisions} : Voir les dernières révisions pour améliorer vos connaissances.
      - ${config.menu.conseils} : Obtenez des conseils pour réviser efficacement.
      - ${config.menu.plan} : Créez un plan d’étude personnalisé.
      - ${config.menu.exercices} : Accédez à des exercices pratiques pour tester vos compétences.

      ⚙️ *Paramètres du Compte :*
      - ${config.menu.settings} : Voir ou modifier les paramètres de votre compte.
      - ${config.menu.profil} : Consultez et mettez à jour votre profil.
      - ${config.menu.langue} : Choisissez une langue pour le bot (anglais, français, wolof).

      🎮 *Fun et Divertissement :*
      - ${config.menu.manga} : Découvrez notre manga *Blood Redemption*.
      - ${config.menu.musique} : Recommander une playlist musicale en fonction de vos préférences.
      - ${config.menu.jeux} : Accédez à des jeux interactifs pour vous divertir.
      - ${config.menu.quiz} : Participez à un quiz sur différents sujets et testez vos connaissances.

      ✨ *Informations diverses :*
      - ${config.menu.aide} : Affiche cette aide avec toutes les commandes disponibles.
      - ${config.menu.infos} : Affiche des informations sur le bot et son créateur.
      - ${config.menu.contact} : Contactez le créateur du bot (MURPHY & MIND).

      🎯 *Suggestions et Feedback :*
      - ${config.menu.suggestion} : Partagez vos suggestions pour améliorer le bot.
      - ${config.menu.feedback} : Donnez votre retour d'expérience sur le bot.

      *Pour toute autre aide ou question, tapez simplement /aide ou contactez-nous directement.*

      *Bonne utilisation de 𝗔𝗧𝗢𝗠𝗜𝗖-𝗕𝗢𝗧!*
    `;

    // Envoi du message d'aide
    await client.sendMessage(message.from, helpMessage, MessageType.text);
  }
};
