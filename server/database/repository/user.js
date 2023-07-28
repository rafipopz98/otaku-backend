const userModel = require("../models/user"); 
const ErrorMessage = "Error at User Repository layer:";
class UserRepo {

    async CreateUser({username, password}) {
        try{
            const user = await userModel.create({username, password});
            await user.save();
            return {success: true, data: user};
        }catch(e) {
            console.log(ErrorMessage, e);
            return {success: false, data: e}
        }
    }


    async GetUsers(){
        try{
            const users = await userModel.find({});
            console.log(users);
            return {success: true, data: users}
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: e, data: e}
        }
    }
}

module.exports = UserRepo