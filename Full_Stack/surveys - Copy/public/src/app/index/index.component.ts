import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user = new User();
  constructor(private _surveyService: SurveyService, private _router: Router) { }

  ngOnInit() {
  }


  toTitleCase(str)
  {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  onSubmit(){
    this.user.name = this.user.name.toLowerCase().trim();
    
    this._surveyService.createUser(this.user).subscribe( 
      (response) => {        
        this._router.navigate(['survey', this.toTitleCase(response.json().name)]);
        
      },
      (error) => {
        console.log("err in create user component: ", error.json());
      }
    );

    this.user = new User();
  }

}
