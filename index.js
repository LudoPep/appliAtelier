const express = require('express')
const path = require('path')
const PORT = process.env.PORT
const router = express.Router()

let app = express();


if(PORT == null || PORT == "") {
  PORT = 8000;
}

express()
  .set('html', path.join(__dirname, 'src'))
  // .set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile('/src/app/root/home/body/body.component.html'))
  .listen(PORT)


  router.get('/Home',function(req,res){
    res.sendFile(path.join(__dirname+'/src/app/root/home/body/body.component.html'));
  });
  
  router.get('/Details',function(req,res){
    res.sendFile(path.join(__dirname+'/src/app/root/detail/card/card.component.html'));
  });

  app.use('/', router);
  
