const { MessageType } = require('@adiwajshing/baileys');

module.exports = {
    name: 'sticker',
    execute(client, { from, sender }, args, message) {
        if (!message.message.imageMessage) {
            return client.sendMessage(from, '⚠️ Envoie une image avec la commande !', MessageType.text);
        }

        const image = message.message.imageMessage;
        client.downloadMediaMessage(image).then((buffer) => {
            client.sendMessage(from, buffer, MessageType.sticker);
        }).catch(err => {
            console.error('Erreur Sticker :', err);
            client.sendMessage(from, '❌ Impossible de créer le sticker.', MessageType.text);
        });
    }
};
