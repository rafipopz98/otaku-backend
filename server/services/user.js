const {UserRepo} = require("../database")
const ErrorMessage = "Error at userService Layer";

class UserService {
    constructor(){
       this.repository = new UserRepo()
    }
    
    async GetAllUsers() {
        try{
            console.log(this.repository)
            const users = await this.repository.GetUsers();
            return {success: true, data: users.data};
        }catch(e){
            console.log(ErrorMessage, e);
        return {success: false, data: e};
        }
    }
}

module.exports = {UserService}