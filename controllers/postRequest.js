const express = require('express')
const passport = require('passport')


const post = express.Router()


// model
const contactDB = require('../Models/contact')
const userDB = require('../Models/user')


post.post('/contact',(req,res)=>{
    console.log(req.body)
})


post.post('/login',(req,res,next)=>{
    console.log(req.flash)
   passport.authenticate('local',{
       successRedirect : '/',
       failureRedirect : '/login',
       failureFlash : true
   })(req,res, next);
});



module.exports = post; 