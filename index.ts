import Discord, { Intents, User } from 'discord.js';
import config from './config/index'
import isValidUrl from './scripts/isValidUrl';
import checkMatchedUrl from './scripts/checkMatchedUrl';

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', async () => {
    console.log(`Guardian-bot is ready to protect`);
});

client.on('messageCreate', async (message) => {

    if(message.author.bot) { 
        return;
    }

    const { content }: { content: string } = message;
    let matches: string[] = isValidUrl(content);
    if(matches.length !== 0) {
        
        let result: any = await checkMatchedUrl(matches);

        console.log(result);

        if(result == undefined) {
            console.log('Everything is safe');
            return;
        }
        
        if(!result.success) {
            message.reply({
                content: result.msg
            });
        } else {
            const {
                threat_code,
                msg
            }: {
                threat_code: number,
                msg: string
            } = result;

            if(threat_code === 101 || threat_code === 103 || threat_code === 104) {
                await message.delete()
                    .then( deleted_msg => {
                        deleted_msg.channel.send(`${deleted_msg.author} ${msg}`);  
                    })
                    .catch( err => {
                        console.log(err.message);
                    });
            } else {
                message.reply({
                    content: msg
                });
            }
        }
    }
});

client.login(config.TOKEN);
