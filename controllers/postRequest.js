const express = require('express')
const passport = require('passport')
const bcrypt = require('bcryptjs')


const post = express.Router()


// model
const contactDB = require('../Models/contact')
const userDB = require('../Models/user')


post.post('/contact',(req,res)=>{
    console.log(req.body)
})

// login
post.post('/login',(req,res,next)=>{
   passport.authenticate('local',{
       successRedirect : '/welcome',
       failureRedirect : '/login',
       failureFlash : true
   })(req,res, next);
});

post.post('/register',(req,res)=>{
    const {firstName,lastName,email,phone,password,C_password,city,state} = req.body;
    const newUser = new userDB({firstName,lastName,email,phone,password,city,state});
    if(password != C_password){
        req.flash('error_msg','Password not Matching');
        res.redirect('/register')
    }
    userDB.findOne({email : email},(err,user)=>{
        if(user){
            req.flash('success_msg','This Email is Already Present .');
            res.redirect('/login')
        }
           bcrypt.genSalt(10,(err,salt)=>{
               bcrypt.hash(newUser.password,salt, (err,hash)=>{
                   if(err) throw err;
                   newUser.password = hash;
                   newUser.save()
                   .then(()=>{
                   req.flash('success_msg','Account Created');
                   res.redirect('/login')
                    })
               .catch(err => console.log(err))
               })
           }) 
    })
    
})

module.exports = post; 