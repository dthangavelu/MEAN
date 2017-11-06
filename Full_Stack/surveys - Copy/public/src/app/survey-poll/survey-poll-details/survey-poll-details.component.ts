import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../../survey.service';
import { SurveyPoll } from "../../surveyPoll";

@Component({
  selector: 'app-survey-poll-details',
  templateUrl: './survey-poll-details.component.html',
  styleUrls: ['./survey-poll-details.component.css']
})
export class SurveyPollDetailsComponent implements OnInit {
  username: string = '';
  survey_id: string = '';  
  surveys: SurveyPoll = new SurveyPoll();

  constructor(private _surveyService: SurveyService, private _router: Router, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe( params => {      
      this.username = params.get('username');      
      this.survey_id = params.get('survey_id');      
    });
  }

  ngOnInit() {

    this.surveys = new SurveyPoll();
    this._surveyService.getSurveyById({_id: this.survey_id}).subscribe( 
      (response) => {             
        this.surveys = response.json();                  
      },
      (error) => {
        console.log("err in q detail comp ngonit method: ", error.json());
      }
    );
    
  }

  goToPoll(){
    this._router.navigate(['survey', this.username]);       
  }

  increaseVoteCount(surveyId, fieldToUpdate){
  
    let data = {
      _id: surveyId,
      field_to_update: fieldToUpdate
    }
    
    this._surveyService.incrementVoteCount(data).subscribe( 
      (response) => {   
          //-----------------------------------------
          this.surveys = new SurveyPoll();
          this._surveyService.getSurveyById({_id: this.survey_id}).subscribe( 
            (response) => {             
              this.surveys = response.json();                        
            },
            (error) => {
              console.log("err in q detail comp ngonit method: ", error.json());
            }
          );
          //=======================================
      },
      (error) => {
        console.log("err in survey detail comp increment vote count method: ", error.json());
      }
    );

  }

}
