import axios from "axios";
import config from "../config/index";
import { 
    MALICIOUS_LINK, 
    NSFW, 
    SPAM, 
    SUSPICIOUS, 
    HIGH_RISK, 
    SAFE, 
    OUT_OF_CREDIT,
    OUT_OF_CREDIT_API, 
    ERROR,
    RED,
    AQUA,
    PURPLE,
    YELLOW,
    ORANGE,
    WHITE
} from "../utils/constants";
import { 
    APIBody, 
    Response, 
    Result
} from "../utils/types";

const typeOfThreat = (data: Response): Result => {

    let result: Result = {
        success: true,
        msg: ``,
        error: false
    };

    /* 
        threat_type, threat_color, threat_code: 
        unsafe -> red -> 101, 
        spamming -> purple -> 102, 
        malware -> red -> 103, 
        phishing -> red -> 104, 
        suspicious -> yellow -> 105, 
        adult -> aqua -> 106, 
        risk_score -> orange -> 107, 
        no-risk -> 999 
    */

    const { 
        unsafe, 
        spamming, 
        malware, 
        phishing, 
        suspicious, 
        adult, 
        risk_score 
    }: { 
        unsafe?: boolean; 
        spamming?: boolean;
        malware?: boolean;
        phishing?: boolean;
        suspicious?: boolean;
        adult?: boolean;
        risk_score?: number
    } = data;

    if ( unsafe ) {
        result.threat_code = 101;
        result.msg = MALICIOUS_LINK;
        result.color = RED;
    } else if ( malware ) {
        result.threat_code = 103;
        result.msg = MALICIOUS_LINK;
        result.color = RED;
    } else if ( phishing ) {
        result.threat_code = 104;
        result.msg = MALICIOUS_LINK;
        result.color = RED;
    } else if( adult ) {
        result.threat_code = 106;
        result.msg = NSFW;
        result.color = AQUA;
    } else if ( spamming ) {
        result.threat_code = 102;
        result.msg = SPAM;
        result.color = PURPLE;
    } else if ( suspicious ) {
        result.threat_code = 105;
        result.msg = SUSPICIOUS;
        result.color = YELLOW;
    } else if ( risk_score !== undefined && risk_score > 85 ) {
        result.threat_code = 107;
        result.msg = HIGH_RISK;
        result.color = ORANGE;
    } else {
        result.threat_code = 999;
        result.msg = SAFE;
    }

    return result;

}

const checkMatchedUrl = async ( matches: string[] ): Promise<Result> => {
    
    const body: APIBody = {
        strictness: 0,
        fast: true
    };

    
    for(let match of matches) {

        let uri: string = `${config.API_URL}/${config.PRIV_KEY}/`;

        const encodedMatch: string = encodeURIComponent(match);
        uri += encodedMatch;

        try {
            const { data }: { data: Response } = await axios.post(uri,body);

            const { 
                success, 
                message 
            }: { 
                success: boolean; 
                message: string
            } = data;

            if(!success) {
                if(message === OUT_OF_CREDIT_API) {
                    return {
                        success: false,
                        msg: OUT_OF_CREDIT,
                        color: WHITE,
                        error: false
                    };
                } else {
                    return {
                        success: false,
                        msg: message,
                        error: true
                    };
                }
            }
            
            let result: Result = typeOfThreat(data);
            const { threat_code }: { threat_code?: number } = result;
    
            if(threat_code !== 999) {
                return result;
            }
            
        } catch (error) {
            let errorMessage: string = ERROR;
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            return {
                success: false,
                msg: errorMessage,
                error: true
            };
        }
    }

    return {
        success: true,
        msg: SAFE,
        threat_code: 999,
        error: false
    };
}

export default checkMatchedUrl;
