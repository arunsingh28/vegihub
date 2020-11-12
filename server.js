const express  = require('express')
const expresslayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const mongoose = require('mongoose');

const app = express();


// logger
app.use(morgan('dev'));

require('./config/passport')(passport)


// db connection
const db = "mongodb+srv://arun:1234@cluster0-t3qon.mongodb.net/shapeyou?retryWrites=true&w=majority"
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology : true})
.then(()=> console.log('DataBase is Connected'))
.catch(err => console.log(err))



// template engine
app.use(expresslayouts)
app.set('view engine','ejs')
app.use(express.static('public'))

// flash midleware
app.use(flash());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// session
app.use(
    session({
    secret : 'runVegihub*67!@',
    resave : true,
    saveUninitialized : true
})
);

// global varibles
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});




// body parser
app.use(express.urlencoded({extended:true}))


// routes
app.use('/',require('./controllers/getRequest'))
app.use('/vegiP',require('./controllers/postRequest'))


// default route
app.use('*',(req,res)=>{
    res.render('404',{
        title : 'Page Not Found'
    })
})

// server start
app.listen(process.env.PORT || 3000 ,console.log(`Server Running on PORT:3000`))