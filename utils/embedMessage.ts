import { MessageEmbed } from "discord.js";
import { 
    BEWARE,
    BOT_ICON_URL,
    DEVELOPER,
    DEVELOPER_ICON_URL,
    GUARDIAN_BOT, 
    RED, 
    REPO_LINK
} from "./constants";

const embedMessage = (title: string, msg: string): any => {

    const embeddedMessage = new MessageEmbed()
        .setColor(RED)
        .setTitle(title)
        .setAuthor({
            name: GUARDIAN_BOT, 
            iconURL: BOT_ICON_URL, 
            url: REPO_LINK 
        })
        .addFields(
            { 
                name: BEWARE, 
                value: msg 
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
