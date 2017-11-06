import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from "../../survey.service";
import { SurveyPoll } from '../../surveyPoll';


@Component({
  selector: 'app-survey-poll-new',
  templateUrl: './survey-poll-new.component.html',
  styleUrls: ['./survey-poll-new.component.css']
})
export class SurveyPollNewComponent implements OnInit {
  surveys = new SurveyPoll();
  username;
  validation_error = "";

  constructor(private _route: ActivatedRoute, private _surveyService: SurveyService, private _router: Router) {
    this._route.paramMap.subscribe( params => {      
      this.username = params.get('username');
    });
   }

  ngOnInit() {
  }

  cancel(){
    this._router.navigate(['survey', this.username]);       
  }

  onCreateNewPoll(){
    this.surveys.name = this.username;    
    
    this._surveyService.addNewSurvey(this.surveys).subscribe( 
      (response) => {                
        this._router.navigate(['survey', this.username]);
      },
      (error) => {
        console.log("err in question new component on create new q method: ", error.json());
      }
    );

    this.surveys = new SurveyPoll();

  }

}
