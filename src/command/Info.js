const packageJson = require('../package.json');

module.exports = {
    name: 'info',
    execute(client, { from }) {
        const info = `
        🤖 *Atomic Bot* - Version ${packageJson.version}
        🚀 Développé par Murphy FF and Master mind
        📅 En ligne depuis : ${new Date().toLocaleDateString()}
        `;
        client.sendMessage(from, info, MessageType.text);
    }
};
