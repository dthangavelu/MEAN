
var pets = require("../controllers/pets.js");

module.exports = function(app){	
		 
	app.get('/', function(req, res) {	  
	  pets.show(req, res);
	})

	app.get('/pets/new', function(req, res) {	  
	 pets.create_form(req, res);
	})

	app.get('/pets/:_id', function(req, res) {		
		pets.info(req, res);	 
	})

	app.post('/pets', function(req, res) {  
		pets.create(req, res);	 
	})

	app.get('/pets/edit/:_id', function(req, res) {		
		pets.update_form(req, res);
	})

	app.post('/pets/:_id', function(req, res) {		
		pets.update(req, res);	 
	})

	app.get('/pets/destroy/:_id', function(req, res) {		
		pets.destroy(req, res);	 
	})	
}

