const express = require('express')
const path = require('path')
const PORT = process.env.PORT
const router = express.Router()

let app = express();


if(PORT == null || PORT == "") {
  PORT = 8000;
}

express()
  // .set('views', path.join(__dirname, 'src'))
  // .set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile('body.component.html'))
  .listen(PORT)


  router.get('/Home',function(req,res){
    res.sendFile(path.join(__dirname+'/body.component.html'));
  });
  
  router.get('/Details',function(req,res){
    res.sendFile(path.join(__dirname+'/card.component.html'));
  });

  app.use('/', router);
  
