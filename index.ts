import Discord, { Intents, User } from 'discord.js';
import config from './config/index'

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
    if(message.content === 'spam') {
        console.log(message);
        message.delete()
            .then( msg => {
                console.log(`Deleted ${msg.author.username}'s message`);
                msg.channel.send(`Booooo spammer ${msg.mentions}`);
                
            })
    }
});

client.login(config.TOKEN);
