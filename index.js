//require stuff
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');

//declare global variables
var app = express();

//set use statements
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/'));
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));

//include controllers/routers

//define routes
app.get('/', function(req, res){
	res.render('home');
});

app.get('*', function(req, res){
	console.log('wildcard route');
	res.render('error');
});

//listen to port 3000
app.listen(3000);