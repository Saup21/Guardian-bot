import consola from 'consola' ;
import { getTitle } from './utils/getTitle';
import Discord, { Intents , MessageEmbed } from 'discord.js';
import config from './config/index'
import isValidUrl from './scripts/isValidUrl';
import checkMatchedUrl from './scripts/checkMatchedUrl';
import { Result } from './utils/types';
import { 
    ERROR, 
    READY 
} from './utils/constants';

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', async () => {
    // console.log(READY);
    consola.success(READY) ;
});

client.on('messageCreate', async (message) => {

    if(message.author.bot) { 
        return;
    }

    const { content }: { content: string } = message;
    const matches: string[] = isValidUrl(content);
    if( matches.length > 0 ) {
        
        const result: Result = await checkMatchedUrl(matches);
        const {
            success,
            threat_code,
            msg,
            error
        }: {
            success: boolean;
            threat_code?: number;
            msg: string;
            error?: boolean 
        } = result;
        
        if(!success) {
            if(error) {
                consola.error(msg) ;
            } else {
                message.reply({
                    content: msg
                });
            }
        } else {

            if(threat_code === 999) {
                console.log(msg);
                return;
            }

            if(threat_code === 101 || threat_code === 103 || threat_code === 104) {
                try {
                    const deleted_msg = await message.delete();
                    deleted_msg.channel.send(`${deleted_msg.author} ${msg}`);
                } catch (error) {
                    let errorMessage: string = ERROR;
                    if (error instanceof Error) {
                        errorMessage = error.message;
                    }
                    consola.error(errorMessage) ;
                }
            } else {
                const title: string = getTitle(msg) ;
                const embeddedMessage = new MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle(title)
                    .setAuthor({ 
                        name: 'Guardian-bot', 
                        // iconURL: './logo/Guardian-bot.png' , 
                        url: "https://github.com/Saup21/Guardian-bot"
                    })
                    .addFields(
                        { 
                            name: 'BEWARE !!!', 
                            value: msg
                        }
                    )
                    .setTimestamp()
                    .setFooter({ 
                        text: 'Developed by Sauparna Gupta',
                        iconURL: 'https://i.imgur.com/AfFp7pu.png' 
                    });
                message.reply({
                    embeds: [embeddedMessage]
                });
            }
        }
    }
});

client.login(config.TOKEN);
