
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');

var session = require('express-session');
app.use(session({secret: 'supersecret'}));

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quotesDB');
mongoose.Promise = global.Promise;

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

var UserSchema = new mongoose.Schema({
 name:  { type: String, required: true, minlength: 2},
 quote:  { type: String, required: true},
 created_date: { type: Date, default: Date.now },
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User');
 
 app.get('/', function(req, res) {	 
 //res.sendFile(path.join(__dirname + '/static/home.html')); 

 res.render("home");
})

app.post('/add_quote', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({name: req.body.name, quote: req.body.quote});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
	  data = {
		  errors: user.errors,
	  }
	  res.render("home", data);
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('all_quotes');
    }
  })
})

app.get('/all_quotes', function(req, res) {	  
  User.find({}, function(err, users) { 
	if(err){
		console.log("something went wrong");
	}else{
		console.log("users************************", users[0].created_date)
		/* for(let i=0;i<users.length;i++){
			console.log("for loop - user", users[0]);			
		} */
		data = {
			users: users,
		}
		res.render("quotes", data);
	}
  })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})