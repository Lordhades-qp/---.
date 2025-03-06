const { MessageType } = require('@adiwajshing/baileys');
const config = require('../../config');  // Assurez-vous que le chemin est correct

module.exports = {
  name: 'menu',
  description: 'Affiche le menu principal du bot.',
  async execute(client, message, args) {
    const user = message.sender;

    // Message initial de démarrage du chargement
    let loadingMessage = await client.sendMessage(message.from, '[░░░░░░░░░░] 0%', MessageType.text);

    // Tableaux pour la progression du chargement
    const loadingStages = [
      '[░░░░░░░░░░] 0%',
      '[██░░░░░░░░] 25%',
      '[████░░░░░░] 50%',
      '[██████░░░░] 75%',
      '[██████████] 100%'
    ];

    let currentStage = 0;

    // Fonction pour mettre à jour le chargement toutes les 1 seconde
    const interval = setInterval(async () => {
      if (currentStage < loadingStages.length) {
        // Mise à jour du message avec la progression actuelle
        await client.sendMessage(message.from, loadingStages[currentStage], MessageType.text);
        currentStage++;
      } else {
        // Une fois le chargement terminé, on affiche le menu
        clearInterval(interval);
        
        // Le message final du menu
        const menuMessage = `
        *Menu de ${config.botName}:*

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
        
        await client.sendMessage(message.from, menuMessage, MessageType.text);
      }
    }, 1000);  // Intervalle de 1 seconde
  }
};
