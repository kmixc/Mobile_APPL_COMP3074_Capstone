const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    picture:String,
    userType:String
})


mongoose.model("user",UserSchema)