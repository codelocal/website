var port = 8080;
var express = require('express');
var app = express();

//app configurations
require('dotenv').config();
app.set('view engine','pug');
app.use('/static',express.static(__dirname+'/public'));

//middleware
app.use(bodyParser.urlencoded({extended:true}));

//connec to db
//var mongoose = require('mongoose');
//mongoose.connect(process.env.DB_URI);

app.listen(port, function(){
  console.log('app started on '+port);
})
