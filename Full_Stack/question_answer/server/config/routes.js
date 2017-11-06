
var questionAnswers = require("../controllers/questionAnswers.js");
var path = require('path');

module.exports = function(app){	
	app.post('/api/user', (req, res, next)=>{		
		questionAnswers.createUser(req, res);
	  });	
	  	  
	  app.post('/api/logout', (req, res, next)=>{		
		questionAnswers.logout(req, res);
	  });
	  
	  app.post('/api/addNewQuestion', (req, res, next)=>{		
		questionAnswers.addNewQuestion(req, res);
	  });
	  
	  app.get('/api/questions/getAll', (req, res, next)=>{		
		questionAnswers.getAllQuestions(req, res);
	  });

	  app.post('/api/questions/getOne', (req, res, next)=>{		
		questionAnswers.getQuestionById(req, res);
	  });

	  app.post('/api/answer/add', (req, res, next)=>{		
		questionAnswers.addAns(req, res);
	});
	
		app.post('/api/answer/incrementLikes', (req, res, next)=>{		
		questionAnswers.iLikes(req, res);
	});

	app.all("*", (req,res,next) => {
	res.sendFile(path.resolve("./public/dist/index.html"))
    });	
}

