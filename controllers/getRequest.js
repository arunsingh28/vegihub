const express = require('express')
const { ensureAuth, forwardAuth } = require('../config/auth');
const get = express.Router()

get.get('/',(req,res)=>{
    res.render('home',{
        title : 'Home',
        reg : true
    })
})


get.get('/login',(req,res)=>{
    res.render('login',{
        title : 'Login',
        reg : true
    })
})


get.get('/register',(req,res)=>{
    res.render('register',{
        title : 'Register',
        reg : false
    })
})

get.get('/welcome',ensureAuth,(req,res)=>{ 
    res.send('ok')
})



module.exports = get; 