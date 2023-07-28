const mongoose =require('mongoose')
const {DB_URL} =require("../config")


const ConnectDB = async () => {
    try{
        console.log("DB_URL:", DB_URL);
        await mongoose.connect(DB_URL)
        console.log("DB Connected")
    }catch(e) {
        console.log("Error while connecting to DB", e);
        process.exit(1)
    }
}

module.exports = ConnectDB;