var mongoose = require('mongoose')
var User = mongoose.model('User');
var SurveyPoll = mongoose.model('SurveyPoll');
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
	
	addNewSurvey: function(req, res){		
		var survey = new SurveyPoll(req.body);
		
		survey.save(function(err) {
			
			if(err) {
				console.log('something went wrong when saving survey', err);				
				res.json(err);
			} else { 	
				console.log("in controller add new survey - successfully saved");
				res.json(survey);
			}
			});

	},

	getAllSurveys: function(req, res){		
		SurveyPoll.find({}, function(err, surveys) { 			
			if(err){
				console.log("something went wrong finding all surveys");
				 res.json(err);
			}else{						
				res.json(surveys);
			}
			});
	},

	removeSurveyById: function(req, res){		
		
		SurveyPoll.remove({_id: req.body._id}, function(err, surveys) { 
						if(err){
							 console.log("something went wrong remvoing survey");
							 res.json(err);
						}else{			
							res.json("Deleted the survey successfully");
						}
					  })
			},
					
	getSurveyById: function(req, res){		
		
		SurveyPoll.findOne({_id: req.body._id}, function(err, surveys) { 
				if(err){
					console.log("something went wrong finding survey by id");
					res.json(err);
				}else{						
					res.json(surveys);
				}
			  })

	},

	incVote: function(req, res){		
		req.body.field_to_update = req.body.field_to_update.trim();

		if(req.body.field_to_update === 'option_1_count'){
			SurveyPoll.update({_id: req.body._id}, {$inc: {option_1_count: 1}}, function(err){				
					res.json(err);
		   });
		}else if(req.body.field_to_update === 'option_2_count'){
			SurveyPoll.update({_id: req.body._id}, {$inc: {option_2_count: 1}}, function(err){
				res.json(err);
		   });

		}else if(req.body.field_to_update === 'option_3_count'){
			SurveyPoll.update({_id: req.body._id}, {$inc: {option_3_count: 1}}, function(err){
				res.json(err);
		   });
		}else if(req.body.field_to_update === 'option_4_count'){
			SurveyPoll.update({_id: req.body._id}, {$inc: {option_4_count: 1}}, function(err){
				res.json(err);
		   });
		}
		

	},


}

