
var users = require("../controllers/users.js");

module.exports = function(app){	
		 
	app.get('/', function(req, res) {	  
	  users.index(req, res);
	});

	app.get('/dashboard_pg', function(req, res) {	  
	 users.dashboard_pg(req, res);
	});
	
	app.post('/register', function(req, res) {	  
	 users.register(req, res);
	});
	
	app.post('/login', function(req, res) {	  
	 users.login(req, res);
	});
	
	app.get('/logout', function(req, res) {	  
	 users.logout(req, res);
	});
	
	/* 
	app.get('/users/new', function(req, res) {	  
	 users.create_form(req, res);
	})

	app.get('/users/:_id', function(req, res) {		
		users.info(req, res);	 
	})

	app.post('/users', function(req, res) {  
		users.create(req, res);	 
	})

	app.get('/users/edit/:_id', function(req, res) {		
		users.update_form(req, res);
	})

	app.post('/users/:_id', function(req, res) {		
		users.update(req, res);	 
	})

	app.get('/users/destroy/:_id', function(req, res) {		
		users.destroy(req, res);	 
	})	
	
	 */
}

