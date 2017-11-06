var mongoose = require('mongoose')
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
const url = require('url');  

module.exports = {	
	
	createUser: function(req, res){
		var user = new User(
				{ 
					name: req.body.name,
				}
			);
			
			User.findOne({name: req.body.name}, function(err, users) { 
								
				if(err){					
					 res.json(err);
				}else{	
					
					if(!users){
						user.save(function(err) {
							
							if(err) {								
								res.json(err);
							} else { 								
								req.session.logged_in_user = req.body.name;	
								res.json(user);				
							}
							});

					}else{						
						req.session.logged_in_user = req.body.name;	
						res.json(user);				
					}					
		
				}
				});	
	},

	logout:  function(req, res) {			
		delete req.session.logged_in_user;		
		res.json("Logged out the user successfully");
	},	
	
	addNewQuestion: function(req, res){
		
		var question = new Question(
			{ question: req.body.question,
				description: req.body.description,
				answers: [],
			}
		);
		
			question.save(function(err) {
			
			if(err) {
				console.log('something went wrong when saving question', err);				
				res.json(err);
			} else { 				
				res.json("successfully saved the question in controller");
			}
			});

	},

	getAllQuestions: function(req, res){		
		Question.find({}, function(err, questions) { 			
			if(err){
				console.log("something went wrong finding all questions");
				 res.json(err);
			}else{						
				res.json(questions);
			}
			});
	},

	getQuestionById: function(req, res){		
		
		Question.findOne({_id: req.body._id})
		.populate('answers')
		.exec(function(err, questions) { 			
			if(err){
				// console.log("something went wrong finding questin by id");
					res.json(err);
			}else{					
				res.json(questions);
			}
		});

	},

	iLikes: function(req, res){
		console.log("req body of ilikes in controller", req.body);

		Answer.update({_id: req.body._id}, {$inc: {likes: 1}}, function(err){
				res.json(err);
		   });

	},

	addAns: function(req, res){
		
		Question.findOne({_id: req.body._question}, function(err, question){
			
			let answer = new Answer(req.body);
			
			answer.save(function(err){
				question.answers.push(answer);
				question.save(function(err){
							if(err) {
									console.log('Error saving question and ans');
							} else {									
									res.json(question);
							}
					});
			 });
		});
	},

}

