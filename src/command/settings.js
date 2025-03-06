const { MessageType } = require('@adiwajshing/baileys');
const config = require('../../config');  // Assurez-vous que le chemin est correct

module.exports = {
  name: 'settings',
  description: 'Affiche et modifie les paramètres du compte utilisateur.',
  async execute(client, message, args) {
    const user = message.sender;

    // Si aucun argument n'est passé, affiche les paramètres actuels
    if (!args[0]) {
      const settingsMessage = `
        *Paramètres de votre compte sur ${config.botName}, ${user}:*

        🌐 *Langue actuelle :* ${config.menu.langue} 
        🏦 *Comptabilité :* ${config.menu.comptabilite}
        🎮 *Jeux et Fun :* ${config.menu.manga}, ${config.menu.musique}, ${config.menu.quiz}
        ⚙️ *Révisions :* ${config.menu.revisions}, ${config.menu.conseils}, ${config.menu.exercices}

        *Pour modifier ces paramètres, utilisez les commandes appropriées :*
        - /langue <nouvelle langue> : Changez la langue du bot (ex. "français", "anglais").
        - /comptabilite <valeur> : Changez vos préférences comptables.
        - /jeux <valeur> : Ajustez les paramètres des jeux et du fun.
        - /revisions <valeur> : Mettez à jour vos préférences de révisions.
        
        Si vous avez besoin d'aide supplémentaire, tapez /aide.

      `;
      
      // Envoie les paramètres actuels
      await client.sendMessage(message.from, settingsMessage, MessageType.text);
    }

    // Si un argument est passé, traite la modification
    else if (args[0].toLowerCase() === 'langue') {
      if (args[1]) {
        // Ici, tu peux ajouter la logique pour changer la langue de l'utilisateur
        const newLangue = args[1];
        // Exemple : on peut mettre à jour un fichier de données ou une base de données avec cette nouvelle langue
        await client.sendMessage(message.from, `Votre langue a été changée en ${newLangue}.`, MessageType.text);
      } else {
        await client.sendMessage(message.from, 'Veuillez spécifier la langue à utiliser. Exemple : /settings langue français', MessageType.text);
      }
    }

    // Autres configurations : Comptabilité, Jeux, Révisions, etc.
    else if (args[0].toLowerCase() === 'comptabilite') {
      if (args[1]) {
        // Logique pour ajuster les paramètres comptables
        await client.sendMessage(message.from, `Les paramètres comptables ont été mis à jour à : ${args[1]}.`, MessageType.text);
      } else {
        await client.sendMessage(message.from, 'Veuillez spécifier vos paramètres comptables. Exemple : /settings comptabilite "suivi détaillé"', MessageType.text);
      }
    }

    // Autres commandes pour personnaliser les paramètres peuvent être ajoutées ici

    else {
      await client.sendMessage(message.from, 'Commande invalide. Tapez /settings pour voir les options disponibles.', MessageType.text);
    }
  }
};
