const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    role: {
        type:String,
        enum: ["user", "paid-user"],
        default: "user",
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    role: [roleSchema],
})

module.exports =mongoose.model('user', userSchema);
