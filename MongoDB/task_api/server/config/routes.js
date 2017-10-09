
var tasks = require("../controllers/tasks.js");

module.exports = function(app){	
	
	//Retrieve all Tasks
	app.get('/tasks', function(req, res) {	  
	  tasks.display_all(req, res);
	});

	//Retrieve a Task by ID
	app.get('/tasks/:_id', function(req, res) {		
		tasks.get_by_id(req, res);	 
	});
	
	//Create a Task
	app.post('/tasks', function(req, res) {  	
		tasks.create(req, res);	 
	});
	
	//Update a Task by ID
	app.put('/tasks/:_id', function(req, res) {		
		tasks.update(req, res);	 
	});
	
	//Delete a Task by ID
	app.delete('/tasks/:_id', function(req, res) {		
		tasks.destroy(req, res);	 
	});	
}

