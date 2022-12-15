const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    phone:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users', userSchema)