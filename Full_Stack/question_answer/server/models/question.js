
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
 
 question:  { 
	 type: String, 
	 required: [true, "Question is required"], 
	 minlength: [10, "Minimum length is 10 for Question"],
	 trim: true,
 },
 description:  { 
	 type: String, 	 
	 trim: true,
 },
 answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
});

mongoose.model('Question', QuestionSchema); // We are setting this Schema in our Models as 'Question'
var Question = mongoose.model('Question');


