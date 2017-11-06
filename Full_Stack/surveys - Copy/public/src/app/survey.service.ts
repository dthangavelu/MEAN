import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";

@Injectable()
export class SurveyService {

  constructor(private _http: Http) { }

  createUser(user) {    
    return this._http.post(`/api/user`, user);    
  }

  logout(){
    return this._http.post(`/api/logout`, "");
  }

  addNewSurvey(surveys){    
    return this._http.post(`/api/addNewSurvey`, surveys);
  }

  getAllSurveys(){
    return this._http.get(`/api/surveys/getAll`, "");
  }

  getSurveyById(survey_id){    
    return this._http.post(`/api/surveys/getOne`, survey_id);
  }

  removeSurveyById(surveyId){
    return this._http.post(`/api/survey/remove`, surveyId);    
  }
  
  incrementVoteCount(data){          
    return this._http.post(`/api/survey/incrementVote`, data);
  }

}
