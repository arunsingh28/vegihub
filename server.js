const express  = require('express')
const ejs = require('express-ejs-layouts')

const app = express();



// template engine
app.use(ejs)
app.set('view engine','ejs')
app.use(express.static('public'))


app.use('/',(req,res)=>{
    res.render('home')
})


app.listen(process.env.PORT || 3000 ,console.log(`Server Running on PORT:3000`))