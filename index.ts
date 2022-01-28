import Discord, { Intents, User } from 'discord.js';
import config from './config/index'
import isValidUrl from './utils/isValidUrl';

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', async () => {
    console.log(`No Spam is ready to protect`);
});

client.on('messageCreate', async (message) => {
    let msg: string = message.content;
    if(isValidUrl(msg)) {
        console.log(message);
        await message.delete()
            .then( msg => {
                console.log(`Deleted ${msg.author.username}'s message`);
                msg.channel.send(`Booooo spammer ${msg.author}`);
                
            })
            .catch( err => {
                console.log(err.message);
            });
    }
});

client.login(config.TOKEN);
