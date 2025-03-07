const config = require('../config/config');

module.exports = {
    name: 'ban',
    execute(client, { from, sender }, args) {
        if (!config.admins.includes(sender)) {
            return client.sendMessage(from, '🚫 Seuls les administrateurs peuvent utiliser cette commande.', MessageType.text);
        }

        const mentioned = args[0];
        if (!mentioned) return client.sendMessage(from, '⚠️ Mentionne un utilisateur à bannir.', MessageType.text);

        client.groupRemove(from, [mentioned])
            .then(() => client.sendMessage(from, `✅ L'utilisateur @${mentioned.split('@')[0]} a été banni.`, MessageType.text, { contextInfo: { mentionedJid: [mentioned] } }))
            .catch(err => client.sendMessage(from, '❌ Impossible de bannir cet utilisateur.', MessageType.text));
    }
};
