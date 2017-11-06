
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
 name:  { 
	 type: String, 
	 required: [true], 	 
	 trim: true,
 },
 answer:  { 
	 type: String, 
	 required: [true, "Answser is required"], 
	 minlength: [5, "Minimum length is 5 for Answer"],
	 trim: true,
 },
 details:  { 
	 type: String, 	 
	 trim: true,
 },
  likes:  { 
	 type: Number, 	 
	 trim: true,
	 default: 0,
 },
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
});

mongoose.model('Answer', AnswerSchema); // We are setting this Schema in our Models as 'Answer'
var Answer = mongoose.model('Answer');


