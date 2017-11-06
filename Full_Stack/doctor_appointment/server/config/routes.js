

var appointments = require("../controllers/appointments.js");
var path = require('path');

module.exports = function(app){	
	
	app.post('/api/user/create', (req, res, next)=>{
		// console.log("in route create user: ", req.body);
		appointments.createUser(req, res);
	  });	
	
	  app.post('/api/logout', (req, res, next)=>{		
		appointments.logout(req, res);
	  });
	  
	  app.post('/api/appointment/create', (req, res, next)=>{		
		appointments.createNewAppointment(req, res);
	  });
	  	    
	  app.post('/api/appointment/getAll', (req, res, next)=>{		
		appointments.getAllAppt(req, res);
	  });
	  
	  app.post('/api/appointment/remove', (req, res, next)=>{		
		appointments.removeAppointmentById(req, res);
	  });

	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./public/dist/index.html"))
		});	
}

