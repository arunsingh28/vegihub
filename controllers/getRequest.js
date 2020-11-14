const express = require('express')
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const get = express.Router()

get.get('/',forwardAuthenticated,(req,res)=>{
    res.render('home',{
        title : 'Home',
        reg : true
    })
})


get.get('/login',forwardAuthenticated,(req,res)=>{
    res.render('login',{
        title : 'Login',
        reg : true
    })
})


// Logout
get.get('/logout',(req, res) => {
    req.logout()
    req.flash('fade_msg', 'You are logged out')
    res.redirect('/')
})
  

get.get('/register',forwardAuthenticated,(req,res)=>{
    res.render('register',{
        title : 'Register',
        reg : false
    })
})



get.get('/welcome',ensureAuthenticated,(req,res)=>{ 
    console.log(req.user)
    res.json(req.user)
})



module.exports = get; 