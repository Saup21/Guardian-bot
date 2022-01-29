import axios from "axios";
import config from "../config/index";
import { 
    MALICIOUS_LINK, 
    NSFW, 
    SPAM, 
    SUSPICIOUS, 
    HIGH_RISK, 
    SAFE, 
    OUT_OF_CREDIT
} from "../utils/constants";

const typeOfThreat = (data: any) => {

    let result: any = {
        success: true,
    };

    // unsafe, spamming, malware, phishing, suspicious, adult, risk_score, no-risk
    // threat_code: 101, 102, 103, 104, 105, 106, 107, 999

    const { 
        unsafe, 
        spamming, 
        malware, 
        phishing, 
        suspicious, 
        adult, 
        risk_score 
    }: { 
        unsafe: boolean, 
        spamming: boolean,
        malware: boolean,
        phishing: boolean,
        suspicious: boolean,
        adult: boolean,
        risk_score: number
    } = data;

    if ( unsafe ) {
        result.threat_code = 101;
        result.msg = MALICIOUS_LINK;
    } else if ( malware ) {
        result.threat_code = 103;
        result.msg = MALICIOUS_LINK;
    } else if ( phishing ) {
        result.threat_code = 104;
        result.msg = MALICIOUS_LINK;
    } else if( adult ) {
        result.threat_code = 106;
        result.msg = NSFW;
    } else if ( spamming ) {
        result.threat_code = 102;
        result.msg = SPAM;
    } else if ( suspicious ) {
        result.threat_code = 105;
        result.msg = SUSPICIOUS;
    } else if ( risk_score ) {
        result.threat_code = 107;
        result.msg = HIGH_RISK;
    } else {
        result.threat_code = 999;
        result.msg = SAFE;
    }

    return result;

}

const checkMatchedUrl = async ( matches: string[] ) => {
    
    const body: any = JSON.stringify({
        strictness: 0,
        fast: true
    });

    
    for(let match of matches) {

        let uri: string = `${config.API_URL}/${config.PRIV_KEY}/`;

        const encodedMatch: string = encodeURIComponent(match);
        uri += encodedMatch;

        let data: any = await axios.post(uri,body)
                                .then( res => res.data )
                                .catch( err => console.log(err.message) );
        // console.log(data);
        
        if(!data.success) {
            const msg: string = OUT_OF_CREDIT;

            return {
                success: false,
                msg
            };
        }
        
        let result: any = typeOfThreat(data);
        const { threat_code }: { threat_code: number } = result;

        if(threat_code !== 999) {
            return result;
        }

    }
}

export default checkMatchedUrl;
