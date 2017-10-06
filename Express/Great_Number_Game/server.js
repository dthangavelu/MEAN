// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");

var session = require('express-session');
var bodyParser = require('body-parser');

// create the express app
var app = express();

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));

app.use(session({secret: 'supersecret'}));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) { 
 if(!("computer_guess" in req.session)){
	 req.session.computer_guess = Math.floor(Math.random() * 100) + 1;
 }
 data = {
	 user_guess: Number(req.session.user_guess),
	 computer_guess: req.session.computer_guess,
 }
 console.log("user guess***************", data.user_guess)
 console.log("computer guess***************", data.computer_guess)
 res.render("index", data);
})

app.post('/guess', function(req, res) {
 console.log("POST DATA", req.body);
 req.session.user_guess = req.body.guess 
 res.redirect('/');
})

app.post('/play_again', function(req, res) {
 delete req.session.user_guess;
 delete req.session.computer_guess;
 res.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});