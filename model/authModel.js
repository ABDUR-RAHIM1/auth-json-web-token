const mongooge = require("mongoose");

const userSchema = mongooge.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})


const User = mongooge.model("user", userSchema)
module.exports = User;