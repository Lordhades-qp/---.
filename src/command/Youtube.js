const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = {
    name: 'yt',
    execute: async (client, { from }, args) => {
        if (!args[0]) return client.sendMessage(from, '⚠️ Veuillez fournir un lien YouTube.', MessageType.text);

        try {
            const videoURL = args[0];
            const info = await ytdl.getInfo(videoURL);
            const title = info.videoDetails.title;
            const output = `./downloads/${title}.mp4`;

            client.sendMessage(from, '⏳ Téléchargement en cours...', MessageType.text);

            ytdl(videoURL, { filter: 'audioandvideo' })
                .pipe(fs.createWriteStream(output))
                .on('finish', () => {
                    client.sendMessage(from, fs.readFileSync(output), MessageType.video, { caption: `🎬 ${title}` });
                    fs.unlinkSync(output);
                });
        } catch (error) {
            console.error('Erreur YouTube:', error);
            client.sendMessage(from, '❌ Erreur lors du téléchargement.', MessageType.text);
        }
    }
};
