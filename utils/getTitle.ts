import {
    MALICIOUS_TITLE, 
    NSFW_TITLE, 
    SPAM_TITLE, 
    HIGH_RISK_TITLE, 
    SUSPICIOUS_TITLE,  
    MALICIOUS_LINK, 
    NSFW, 
    SPAM,  
    SUSPICIOUS, 
    HIGH_RISK, 
} from './constants' ;

const getTitle = (message: string): string => {

    let title: string = ``; 

    switch (message) {
        case MALICIOUS_LINK: 
            title = MALICIOUS_TITLE; 
            break; 
        case NSFW: 
            title = NSFW_TITLE; 
            break; 
        case SPAM: 
            title = SPAM_TITLE; 
            break; 
        case HIGH_RISK: 
            title = HIGH_RISK_TITLE; 
            break; 
        case SUSPICIOUS: 
            title = SUSPICIOUS_TITLE; 
            break; 
        default: 
            title = ``; 
    }

    return title; 
    
}

export default getTitle;
