const express = require('express');

const contact = express.Router();

const contactDB = require('../models/contact')

contact.post('/',(req,res)=>{
    const {name,email,message} = req.body;
    const newContact = new contactDB({name,email,message});
    if(!name|| !email|| !message){
        res.send('fill all detail')
    }else{
    newContact.save();
    res.redirect('/ve');
    }
})

module.exports = contact;