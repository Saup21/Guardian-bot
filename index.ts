import Discord, { Intents } from 'discord.js';
import config from './config/index';
import isValidUrl from './scripts/isValidUrl';
import checkMatchedUrl from './scripts/checkMatchedUrl';
import getTitle from './utils/getTitle';
import { Result } from './utils/types';
import consola from 'consola';
import { 
    ERROR, 
    OUT_OF_CREDIT_TITLE, 
    READY, 
} from './utils/constants';
import embedMessage from './utils/embedMessage';

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', (): any => {
    consola.success(READY);
});

client.on('messageCreate', async (message): Promise<any> => {

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
            color,
            error
        }: {
            success: boolean;
            threat_code?: number;
            msg: string;
            color?: any;
            error?: boolean 
        } = result;
        
        if(!success) {
            if(error) {
                consola.error(msg);
            } else {
                const embeddedMessage: any = embedMessage(color, OUT_OF_CREDIT_TITLE, msg, null);
                message.reply({
                    embeds: [embeddedMessage]
                });
            }
        } else {

            if(threat_code === 999) {
                consola.success(msg);
                return;
            }

            const title: string = getTitle(msg);

            if(threat_code === 101 || threat_code === 103 || threat_code === 104) {
                try {
                    const deleted_msg = await message.delete();
                    const embeddedMessage: any = embedMessage(color, title, msg, deleted_msg.author);
                    deleted_msg.channel.send({
                        embeds: [embeddedMessage]
                    });
                } catch (error) {
                    let errorMessage: string = ERROR;
                    if (error instanceof Error) {
                        errorMessage = error.message;
                    }
                    consola.error(errorMessage);
                }
            } else {
                const embeddedMessage: any = embedMessage(color, title, msg, null);
                message.reply({
                    embeds: [embeddedMessage]
                });
            }
        }
    }
});

client.login(config.TOKEN);
