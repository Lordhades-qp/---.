# ---
WHATSAPP BOT MULTI SERVICES 

---

⚛️ Atomic Bot

Atomic Bot est un bot WhatsApp avancé développé avec Baileys (Node.js). Il offre des fonctionnalités variées, notamment la gestion de groupes, le téléchargement de médias, l'intelligence artificielle et bien plus encore.

🚀 Fonctionnalités

🤖 Réponses IA – Intégré avec ChatGPT pour répondre intelligemment aux messages.

📥 Téléchargement multimédia – Téléchargez des vidéos, images et GIFs directement depuis WhatsApp.

🔧 Système de commandes – Exécutez des commandes pour interagir avec le bot.

👮‍♂️ Modération avancée – Anti-spam, anti-lien et auto-ban après avertissements.

🎭 Système de rôles – Super Admin, Modérateur, et plus.

🎉 Messages d'accueil – Envoyez automatiquement un message de bienvenue aux nouveaux membres d’un groupe.

📊 Page de statut – Vérifiez si le bot est en ligne avec des infos détaillées.


🛠️ Installation

1️⃣ Prérequis

Node.js installé

Git installé

Un numéro WhatsApp dédié


2️⃣ Cloner le dépôt

git clone https://github.com/mikaelsonangel844/atomic-bot.git  
cd atomic-bot

3️⃣ Installer les dépendances

npm install

4️⃣ Lancer le bot

node index.js

📌 Développement

Développeurs :

👑 ᴍᴜʀᴘʜʏ᭄ғғ⚠️

🧠 Master Mind

const { MessageType } = require('@adiwajshing/baileys');

module.exports = {
  name: 'bigmenu',
  description: 'Affiche un menu détaillé avec plusieurs sections.',
  async execute(client, message, args) {
    const user = message.sender;
    const bigMenu = `
      *Bienvenue sur 𝗔𝗧𝗢𝗠𝗜𝗖-𝗕𝗢𝗧, ${user}!*

      *Voici un grand menu avec toutes les fonctionnalités disponibles :*

      🌐 *Comptabilité et Finances :*
      - /comptabilite - Voir les informations comptables.
      - /solde - Vérifier votre solde et transaction.
      - /investir - Conseils pour investir intelligemment.
      - /historique - Voir votre historique financier.

      📚 *Révisions et Études :*
      - /revisions - Voir les dernières révisions.
      - /conseils - Obtenez des conseils pour réviser efficacement.
      - /plan - Créez un plan d’étude personnalisé.
      - /exercices - Accédez à des exercices pratiques.

      ⚙️ *Paramètres de votre Compte :*
      - /settings - Voir ou modifier les paramètres de votre compte.
      - /profil - Consultez et mettez à jour votre profil.
      - /langue - Choisissez une langue pour le bot (anglais, français, wolof).

      🎮 *Fun et Divertissement :*
      - /manga - Découvrez notre manga *Blood Redemption*.
      - /musique - Recommander une playlist musicale.
      - /jeux - Accédez à des jeux interactifs.
      - /quiz - Participez à un quiz sur différents sujets.

      ✨ *Informations diverses :*
      - /aide - Obtenez de l’aide sur une commande.
      - /infos - Voir les informations sur le bot.
      - /contact - Contacter le créateur du bot (MURPHY & MIND).
      
      🎯 *Suggestions et Feedback :*
      - /suggestion - Partagez vos suggestions pour améliorer le bot.
      - /feedback - Donnez un retour sur votre expérience.

      *Pour plus d’aide, tapez /aide.*

      *Bonne utilisation et à bientôt sur 𝗔𝗧𝗢𝗠𝗜𝗖-𝗕𝗢𝗧 !*
    `;

    // Envoi du message avec le grand menu
    await client.sendMessage(
      message.from,
      bigMenu,
      MessageType.text
    );
  }
};
📞 Contact

📧 Si vous avez des questions ou des suggestions, contactez-nous sur WhatsApp !
