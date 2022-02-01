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

export const getTitle = (message: string): string => {
    let title: string = `` ;
    switch (message) {
        case MALICIOUS_LINK : 
            title = MALICIOUS_TITLE ;
        case NSFW : 
            title = NSFW_TITLE ; 
        case SPAM : 
            title = SPAM_TITLE ; 
        case HIGH_RISK :
            title = HIGH_RISK_TITLE ; 
        case SUSPICIOUS : 
            title = SUSPICIOUS_TITLE ; 
        default : 
            title = `` ; 
    }
    return title ; 
}