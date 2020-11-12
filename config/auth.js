const userDB = require('../Models/user')

module.exports = {
    ensureAuth : (req,res,next)=>{
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg','Please Login First to View Account')
        res.redirect('/login')
    },
    forwardAuth : (req,res,next)=>{
        if(!req.isAuthenticated()){
            return next()
        }else{
            res.redirect('/welcome')
        }
    }
}