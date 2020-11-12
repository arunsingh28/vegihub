const express = require('express')
const { ensureAuth, forwardAuth } = require('../config/auth');
const get = express.Router()

get.get('/',forwardAuth,(req,res)=>{
    res.render('home',{
        title : 'Home',
        reg : true
    })
})


get.get('/login',forwardAuth,(req,res)=>{
    res.render('login',{
        title : 'Login',
        reg : true
    })
})


// Logout
get.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
  });
  

get.get('/register',forwardAuth,(req,res)=>{
    res.render('register',{
        title : 'Register',
        reg : false
    })
})

get.get('/welcome',ensureAuth,(req,res)=>{ 
    res.send(req.user)
})



module.exports = get; 