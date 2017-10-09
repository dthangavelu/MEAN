
var mongoose = require('mongoose')
var Task = mongoose.model('Task');

module.exports = {			 
	display_all: function(req, res) {	  
	  Task.find({}, function(err, tasks) { 
		if(err){
			console.log("something went wrong");
			 res.json({errors: tasks.errors});
		}else{				
			res.json(tasks);
		}
	  })	 
	},
	
	get_by_id: function(req, res) {		
	 Task.findOne({_id: req.params._id}, function(err, tasks) { 
		if(err){
			console.log("something went wrong");
			 res.json( {errors: tasks.errors} );
		}else{					
			res.json(tasks);
		}
	  })	 
	},
	
	create: function(req, res) {  		
	  // create a new Task with the name and age corresponding to those from req.body
		var task = new Task( {title: req.body.title, description: req.body.description, completed: req.body.completed} );
	  // Try to save that new task to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
	  task.save(function(err) {
		// if there is an error console.log that something went wrong!
		if(err) {
		  console.log('something went wrong');	
		  res.json( {errors: task.errors} );
		} else { // else console.log that we did well and then redirect to the root route
		  console.log('successfully added a task!');
		  res.json( { message: "Successfully added the task"} );
		}
	  })
	},
	
	update: function(req, res) {	
	let taskFieldToUpdate = {};
		
	if(req.body.title != null){
		taskFieldToUpdate.title = req.body.title;
	}
		
	if(req.body.description != null){
		taskFieldToUpdate.description = req.body.description;
	}
	
	if(req.body.completed != null){
		taskFieldToUpdate.completed = req.body.completed;
	}
	
	 //Task.update({_id: req.params._id}, { $set: { title: req.body.title, description: req.body.description, completed: req.body.completed }}, function(err, tasks) { 
	 Task.update({_id: req.params._id}, { $set: taskFieldToUpdate }, function(err, tasks) { 
		if(err){
			console.log("something went wrong");
			 res.json( {errors: tasks.errors} );
		}else{		
			data = {
				tasks: tasks,
			}
			console.log("Successfully updated the task with id: " + req.params._id);	
			res.json( { message: "Successfully updated the task with ID: " + req.params._id} );
			//res.json(tasks);
		}
	  });	 
	},
	
	destroy: function(req, res) {		
	 Task.remove({_id: req.params._id}, function(err, tasks) { 
		if(err){
			 console.log("something went wrong");
			 res.json( {errors: tasks.errors} );
		}else{			
			res.json( { message: "Successfully deleted the task with ID: " + req.params._id} );
		}
	  });	 
	},	
}

