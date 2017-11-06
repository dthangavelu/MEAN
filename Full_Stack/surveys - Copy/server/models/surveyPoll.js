
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveyPollSchema = new mongoose.Schema({
 name:  { 
	 type: String, 	 
	 required: [true, "Name is required"], 	 
	 trim: true,
 },
 survey_question:  { 
	 type: String, 
	 required: [true, "Survey Question is required"], 
	 minlength: [8, "Minimum length is 8 for Survey Question"],
	 trim: true,
 },
 option_1:  { 
	 type: String, 	 
	 required: [true, "Option 1 is required"],
	 minlength: [3, "Minimum length is 3 for Option 1"], 
	 trim: true,
 },
  option_1_count:  { 
	 type: Number, 	 
	 trim: true,
	 default: 0,
 },
 
 option_2:  { 
	type: String, 
	required: [true, "Option 2 is required"], 	 
	minlength: [3, "Minimum length is 3 for Option 2"], 
	trim: true,
},
 option_2_count:  { 
	type: Number, 	 
	trim: true,
	default: 0,
},

option_3:  { 
	type: String, 	 
	required: [true, "Option 3 is required"], 
	minlength: [3, "Minimum length is 3 for Option 3"], 
	trim: true,
},
 option_3_count:  { 
	type: Number, 	 
	trim: true,
	default: 0,
},

option_4:  { 
	type: String, 
	required: [true, "Option 4 is required"], 	
	minlength: [3, "Minimum length is 3 for Option 4"],  
	trim: true,
},
 option_4_count:  { 
	type: Number, 	 
	trim: true,
	default: 0,
},

},
{
	timestamps: true,
});

mongoose.model('SurveyPoll', SurveyPollSchema); // We are setting this Schema in our Models as 'SurveyPoll'
var SurveyPoll = mongoose.model('SurveyPoll');


