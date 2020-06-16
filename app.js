const express = require('express');
const hbs = require('express-handlebars');
const path = require('path')
const mongoose = require('mongoose');

const app = express();
const contatName = require('./models/contact')

// bodyParser
app.use(express.urlencoded({extended:false}));

// mogoose
const url = 'mongodb://localhost:27017/vegihub';
mongoose.connect(url,({useNewUrlParser:true,useUnifiedTopology: true}))
.then((contact)=>console.log('DB is Connected'))
.catch((err)=>console.log(err));

const contactRouter = require('./routes/contact')

// setup hbs
app.engine('hbs', hbs({extname:'hbs', defaultLayout:'main', layoutsDir:__dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// routes
app.use('/contact',contactRouter);
app.use('/ve',(req,res)=>{
    contatName
    res.render('index',{
        title : 'VegiHub'
    })
});


app.use(express.static(path.join(__dirname+'/public')));


app.listen(4000,console.log('Server running on port:3000'));