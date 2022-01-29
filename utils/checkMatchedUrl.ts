import axios from "axios";
import config from "../config/index";

const checkMatchedUrl = ( matches: string[] ) => {
    
    const body: any = JSON.stringify({
        strictness: 0,
        fast: true
    });

    matches.forEach( async (match: string) => {

        let uri: string = `${config.API_URL}/${config.PRIV_KEY}/`;

        const encodedMatch: string = encodeURIComponent(match);
        uri += encodedMatch;

        let data: any = await axios.post(uri,body)
                                .then( res => res.data)
                                .catch( err => console.log(err.message) );
        data.success = false;
        console.log(data);
        
        if(!data.success) {
            const msg: string = `We couldn't verify the link cause we ran out of credits for the month. 
            Please be cautious before opening the link.`;

            return {
                success: false,
                msg
            };
        }



    });
}

export default checkMatchedUrl;