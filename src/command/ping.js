const { MessageType } = require('@adiwajshing/baileys');

module.exports = {
  name: 'ping',
  description: 'Vérifie si le bot est en ligne et affiche le temps de latence.',
  async execute(client, message, args) {
    const start = Date.now(); // Temps de départ
    const user = message.sender;
    
    // Envoie un message simple pour tester la latence
    await client.sendMessage(message.from, 'Pong...', MessageType.text);
    
    const end = Date.now(); // Temps de fin
    const latency = end - start; // Calcul du temps de latence

    // Envoi de la réponse avec le temps de latence
    await client.sendMessage(message.from, `*Pong!* 🏓\nTemps de latence : ${latency}ms\nBot en ligne et réactif, ${user}!`, MessageType.text);
  }
};
