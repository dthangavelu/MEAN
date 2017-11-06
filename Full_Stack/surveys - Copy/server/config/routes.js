
var surveys = require("../controllers/surveys.js");
var path = require('path');

module.exports = function(app){	
	app.post('/api/user', (req, res, next)=>{		
		surveys.createUser(req, res);
	  });	
	  	  
	  app.post('/api/logout', (req, res, next)=>{		
		surveys.logout(req, res);
	  });
	  
	  app.post('/api/addNewSurvey', (req, res, next)=>{				
		surveys.addNewSurvey(req, res);
	  });
	  
	  app.get('/api/surveys/getAll', (req, res, next)=>{		
		surveys.getAllSurveys(req, res);
	  });

	  app.post('/api/survey/remove', (req, res, next)=>{		
		surveys.removeSurveyById(req, res);
	  });
	  
	  app.post('/api/surveys/getOne', (req, res, next)=>{		
		surveys.getSurveyById(req, res);
	  });

	  app.post('/api/survey/incrementVote', (req, res, next)=>{			  
			surveys.incVote(req, res);
	  });

	  app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./public/dist/index.html"))
		});	
	

}

