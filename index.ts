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
    const { content }: { content: string } = message;
    let matches = isValidUrl(content);
    if(matches.length !== 0) {
        console.log(matches);
        
        await message.delete()
            .then( msg => {
                msg.channel.send(`Booooo spammer ${msg.author}`);
                
            })
            .catch( err => {
                console.log(err.message);
            });
    }
});

client.login(config.TOKEN);
