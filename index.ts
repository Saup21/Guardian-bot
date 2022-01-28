import Discord, { Intents } from 'discord.js';
import config from './config/index'

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log(`No Spam is ready to protect`);
});

client.login(config.TOKEN);
