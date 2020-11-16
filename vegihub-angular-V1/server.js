const express = require('express');
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname+'/dist/vegihub-angular-v1')))

app.use('*',(req,res)=>{
  res.sendStatus(200);
  res.sendFile(path.join('/dist/vegihub-angular-v1/index.html'))
})

const PORT = process.env.PORT || 4200;
app.listen(PORT,console.log(`Server runiing on PORT ${PORT}`))
