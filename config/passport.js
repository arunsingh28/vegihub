const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');

// model
const userDB = require('../Models/user');

module.exports = (passport)=>{
    passport.use(
        new LocalStrategy({ usernameField : 'email' },(email,password, done)=>{
            userDB.findOne({ email :email },(err,user)=>{
                if(!user){
                    return done(null,false,{ message : 'That email is Not Register with us '})
                }else{
                    bcrypt.compare(password,user.password,(err,isMatch)=>{
                        if(err) throw err;
                        if(isMatch){
                            return done(null,user)
                        }else{
                            return done(null,false,{ message : 'Password is Not Correct' })
                        }
                    })
                }
            })
        })
    )

    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })
    passport.deserializeUser((id,done)=>{
        userDB.findById(id,(err,user)=>{
            done(err,user)
        })
    })

}



