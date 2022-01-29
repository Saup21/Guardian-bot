import dotenv from 'dotenv';
dotenv.config();

export default {
    TOKEN: process.env.TOKEN,
    PRIV_KEY: process.env.PRIV_KEY,
    API_URL: process.env.API_URL
};