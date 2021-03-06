const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 20,
    },
    passwordHash: {
        type: String,
        required: true
    }
}, {versionKey: false})

const User = mongoose.model('User', userSchema)

module.exports = User