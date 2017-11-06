import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { SurveyService } from '../../survey.service';
import { SurveyPoll } from "../../surveyPoll";

@Component({
  selector: 'app-survey-poll-list',
  templateUrl: './survey-poll-list.component.html',
  styleUrls: ['./survey-poll-list.component.css']
})
export class SurveyPollListComponent implements OnInit {
  username;
  searchStr;
  user_search: boolean = false;
  all_surveys: Array<SurveyPoll> = [];  
  filtered_surveys: Array<SurveyPoll> = [];  

  constructor(private _route: ActivatedRoute, private _surveyService: SurveyService, private _router: Router) { 
    this._route.paramMap.subscribe( params => {      
      this.username = params.get('username');
    });
  }

  ngOnInit() {

    this._surveyService.getAllSurveys().subscribe( 
      (response) => {        
        this.all_surveys = response.json();          
      },
      (error) => {
        console.log("err in q list comp ngonit method: ", error.json());
      }
    );
    this.filtered_surveys = [];  
    this.user_search = false;
    
  }

  logout(){
    this._surveyService.logout().subscribe( 
      (response) => {         
        this._router.navigate(['']);        
      },
      (error) => {
        console.log("err in q list comp logout method: ", error.json());
      }
    );
  }

  deleteSurvey(surveyId){
    surveyId = {_id: surveyId};
    this._surveyService.removeSurveyById(surveyId).subscribe( 
      (response) => {         
        
        //==========================
        this._surveyService.getAllSurveys().subscribe( 
          (response) => {        
            this.all_surveys = response.json();              
          },
          (error) => {
            console.log("err in q list comp ngonit method: ", error.json());
          }
        );
        //================================
      },
      (error) => {
        console.log("err in q list comp logout method: ", error.json());
      }
    );

  }

  onDynSearch(newVal){
    this.user_search = true;
    this.searchStr = newVal;
    this.filtered_surveys = [];
    let sur: string = "";
    let name: string = "";
    for(let i = 0; i < this.all_surveys.length; i++){
      sur = this.all_surveys[i].survey_question.toLowerCase();
      name = this.all_surveys[i].name.toLowerCase();
    if(sur.includes(this.searchStr.toLowerCase()) || name.includes(this.searchStr.toLowerCase()) ){
        this.filtered_surveys.push(this.all_surveys[i]);        
      }

    }
    
  }

}
