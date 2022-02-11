import { MessageEmbed } from "discord.js";
import { 
    BOT_ICON_URL,
    DEVELOPER,
    DEVELOPER_ICON_URL,
    GUARDIAN_BOT, 
    REPO_LINK
} from "./constants";

const embedMessage = (color: any, title: string, msg: string, author: any): any => {

    const embeddedMessage = new MessageEmbed()
        .setColor(color)
        .setAuthor({
            name: GUARDIAN_BOT, 
            iconURL: BOT_ICON_URL, 
            url: REPO_LINK 
        })
        .addFields(
            { 
                name: title, 
                value: author === null ? msg : `${author} ${msg}`
            }
        )
        .setTimestamp()
        .setFooter({ 
            text: DEVELOPER, 
            iconURL: DEVELOPER_ICON_URL 
        });
    
    return embeddedMessage;

}

export default embedMessage;
