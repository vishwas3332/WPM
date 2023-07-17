const express = require('express')
const res = require('express/lib/response')
const app = express()

app.use(express.static("./public"))

app.get('/',(req,res)=>{
    res.send()
    console.log('user entered home page')
})

app.get('/index',(req,res)=>{
    res.send('We are in Index Page')
    console.log("User entered Index Page")
})

app.listen(3000,()=>{
    console.log('Server running on Port:3000')
})