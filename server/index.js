const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const e = require('express')
require('./UserModel')

app.use(bodyParser.json())

const User = mongoose.model("user")

const mongoUri = "mongodb+srv://RuzzelO:6Br1E0Xe76iPPyKv@cluster0.pfckk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("Connected to mongo")
})

mongoose.connection.on("error",(err)=>{
    console.log("error", err)
})

app.get('/', (req,res)=>{
    res.send("Welcome to node js")
})

app.post('/send-data',(req,res)=>{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        picture:req.body.picture,
        userType:req.body.userType
    })

    user.save()
    .then(data=>{
        console.log(data)
        res.send("Success")
    }).catch(err=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log("Server Running")
})