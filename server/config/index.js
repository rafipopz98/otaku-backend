const dotEnv = require("dotenv");

console.log("NODE_ENV: ", process.env.NODE_ENV);

if(process.env.NODE_ENV !== 'prod'){
    dotEnv.config({path: './.dev.env'})
}else{
    dotEnv.config({path: './.env'});
}


const DB_URL = process.env.DB;
const API_KEY = process.env.APIKEY;
module.exports=  {DB_URL, API_KEY}