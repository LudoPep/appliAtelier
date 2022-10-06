const express = require('express')
const path = require('path')
const PORT = process.env.PORT

if(PORT == null || PORT == "") {
  PORT = 8000;
}

express()
  .set('views', path.join(__dirname, 'src'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('app'))
  .listen(PORT)



  
