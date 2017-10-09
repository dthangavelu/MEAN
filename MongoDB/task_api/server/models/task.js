
var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
 title:  { type: String},
 description:  { type: String, default: ""},
 completed:  { type: Boolean, default: false}, 
 created_at: { type: Date, default: Date.now },
 updated_at: { type: Date, default: Date.now },
})
mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'Pet'
var Task = mongoose.model('Task');