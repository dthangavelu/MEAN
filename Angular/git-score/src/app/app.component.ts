import { Component, OnInit } from '@angular/core';
import {GitService} from './git.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username;
  userInfo;
  score;

  constructor(private _gitService: GitService){}

  calculateScore(){
    
    this._gitService.getUserInfo(this.username, (dataFromApi) => {
      this.userInfo = dataFromApi;      
      this.score = this.userInfo.followers + this.userInfo.public_repos;
      console.log("userinfo msg: ", this.userInfo.message);     
    }); 

    if(this.userInfo.message && this.userInfo.message === "Not Found"){
      this.score = -1;
    }

    this.username = "";
  }
}
