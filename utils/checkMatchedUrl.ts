import axios from "axios";
import config from "../config/index";

const typeOfThreat = (data: object) => {

    let result: object = {
        success: true,
    };

    // unsafe, spamming, malware, phishing, suspicious, adult, risk_score

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

    if(unsafe) {
        
    }

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
                                .then( res => res.data)
                                .catch( err => console.log(err.message) );
        // console.log(data);
        
        if(!data.success) {
            const msg: string = `We couldn't verify the link cause we ran out of credits for the month. 
            Please be cautious before opening the link.`;

            return {
                success: false,
                msg
            };
        }
        
        let result: object = typeOfThreat(data);

    }
}

export default checkMatchedUrl;