
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

const url = require('url'); 

var session = require('express-session');
app.use(session({secret: 'supersecret'}));

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/messagesDB');
mongoose.Promise = global.Promise;

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

var MessageSchema = new mongoose.Schema({
 msg_author:  { type: String, required: [true, "Enter your Name"], minlength: [4, "Name should be at least 4 characters long"]},
 msg_content:  { type: String, required: [true, "Enter your message"]},
 comments:  [{ 
	comment_author: { type: String, required: [true, "Enter your Name"], minlength: [4, "Name should be at least 4 characters long"]}, 
	comment_content: { type: String, required: [true, "Enter your comment"]},
	created_date: { type: Date, default: Date.now },
}],
 created_date: { type: Date, default: Date.now },
})
mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Message'
var Message = mongoose.model('Message');
 
 app.get('/', function(req, res) {	   
  Message.find({}, function(err, messages) { 
	if(err){
		console.log("something went wrong");
		 res.render('messages', {errors: messages.errors})
	}else{		
		data = {
			messages: messages,			
		}
		req.session.messages = messages;
		console.log("In ROOT ROUTE******************");
		
		res.render("messages", data);
	}
  })
 
})

app.post('/messages', function(req, res) {  
  let data = {};		
	
  var message = new Message({msg_author: req.body.msg_author, msg_content: req.body.msg_content, comments: []});
  
  message.save(function(err) {    
    if(err) {
		console.log('something went wrong IN SAVE');
		data.errors = message.errors;
		data.messages = req.session.messages;
		
		res.render("messages", data);
    } else { 
      console.log('successfully added a message!');
      res.redirect('/');
    }
  });
})

app.post('/comments/:_id', function(req, res) {  
	let data = {};			
	if(req.body.comment_author === "" && req.body.comment_content === ""){
		errors = {
			comment_author: {message: "Enter your name"},
			comment_content: {message: "Enter your comment"}
		}
		res.redirect(url.format({
		   pathname:"/",
		   data: {
			  errors: errors,
			  messages: req.session.messages,			  
			}
		 }));				
	}else if(req.body.comment_author === "")	{
		errors = {
			comment_author: {message: "Enter your name"}
		}
		res.redirect(url.format({
		   pathname:"/",
		   data: {
			  errors: errors,
			  messages: req.session.messages,			  
			}
		 }));
	}else if(req.body.comment_content === "")	{
		errors = {
			comment_content: {message: "Enter your comment"}
		}
		res.redirect(url.format({
		   pathname:"/",
		   data: {
			  errors: errors,
			  messages: req.session.messages,			  
			}
		 }));
	}else{
	Message.update({_id: req.params._id}, { $addToSet: {comments: {comment_author: req.body.comment_author, comment_content: req.body.comment_content,} }}, function(err, comments) { 
	if(err){
		console.log("something went wrong IN UPDATE comment");
		data.errors = comments.errors;
		data.messages = req.session.messages;
		 res.render("messages", data);
	}else{		
		console.log('successfully added a comment in comment id route!');	

		 Message.find({}, function(err, messages) { 
			if(err){
				console.log("something went wrong");
				 res.render('messages', {errors: messages.errors})
			}else{		
				data = {
					messages: messages,	
					errors: "",
				}
				req.session.messages = messages;				
				res.render("messages", data);		
			}
		  })	  
	}
  });	
 }	
 
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})