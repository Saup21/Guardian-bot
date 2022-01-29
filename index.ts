import Discord, { Intents, User } from 'discord.js';
import config from './config/index'
import isValidUrl from './utils/isValidUrl';
import checkMatchedUrl from './utils/checkMatchedUrl';

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', async () => {
    console.log(`NoSpam is ready to protect`);
});

client.on('messageCreate', async (message) => {
    const { content }: { content: string } = message;
    let matches: string[] = isValidUrl(content);
    if(matches.length !== 0) {
        
        checkMatchedUrl(matches);
        
        // await message.delete()
        //     .then( msg => {
        //         msg.channel.send(`Booooo spammer ${msg.author}`);
                
        //     })
        //     .catch( err => {
        //         console.log(err.message);
        //     });
    }
});

client.login(config.TOKEN);
