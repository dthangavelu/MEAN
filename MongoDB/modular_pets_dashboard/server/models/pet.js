
var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
 name:  { type: String, required: [true, "Enter value for Name"], minlength: [2, "Minimum length is 2"]},
 breed:  { type: String, required: [true, "Enter value for Breed"], minlength: [2, "Minimum length is 2"]},
 age:  { type: String, required: [true, "Enter value for Age"], min: [1, "Minimum age is 1 day"]},
 size:  { type: String, required: [true, "Enter value for Size"]},
 color:  { type: String, required: [true, "Enter value for Color"]},
 gender:  { type: String, required: [true, "Enter value for Gender"]},
 created_date: { type: Date, default: Date.now },
})
mongoose.model('Pet', PetSchema); // We are setting this Schema in our Models as 'Pet'
var Pet = mongoose.model('Pet');