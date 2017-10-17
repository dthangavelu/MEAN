import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GitService {
  
  constructor(private _http: Http) { }

  api = " https://api.github.com/users/";

  getUserInfo(username, cb){
    this.api = this.api + username;

    this._http.get(this.api).subscribe(
      (response) => {
        console.log("response in service: ", response.json());
        cb(response.json());
      },
      (err) => {
        console.log("error from api call: ", err);
        cb(err.json());
      }
    );
  }

}
