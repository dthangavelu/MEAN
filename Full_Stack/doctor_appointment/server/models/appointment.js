
var mongoose = require('mongoose');
var path = require("path");
var Schema = mongoose.Schema;

var AppointmentSchema = new mongoose.Schema({
 patient_name:  { type: String, required: [true, "Enter value for Name"], minlength: [2, "Minimum length is 2"]},
 appointment_date:  { 
     type: Date, 
     required: [true, "Enter value for date"],
     validate: {
        validator: function(val){			 
           return val > Date.now();
        },
        message: "Appointment date cannot be in future in DB"
    }
    },
 appointment_time:  { type: String, required: [true, "Enter value for time"] },
 complain:  { type: String, required: [true, "Enter value for complain"]}, 
},
{
	timestamps: true,
});

mongoose.model('Appointment', AppointmentSchema); // We are setting this Schema in our Models as 'Pet'
var Appointment = mongoose.model('Appointment');

// AppointmentSchema.path('appointment_date').validate(function (value) {
//     console.log("appt ime: ", appointment_date );
//     console.log("val in db shcema: ", value);
//     let current_date = new Date(Date.now());
//     console.log("inm db schema date now: ", current_date);
//     return appointment_date < current_date;
//   }, 'Appointment Date must be greater than Current Date');