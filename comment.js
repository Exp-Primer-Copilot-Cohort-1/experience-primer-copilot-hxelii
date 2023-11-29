//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

//create server
var server = app.listen(3000, function(){
  console.log("Express server has started on port 3000");
});

//set static directory
app.use(express.static('public'));

//use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//set view engine
app.set('view engine', 'ejs');

//set view directory
app.set('views', './views');

//set router
var router = require('./router/main')(app, fs);