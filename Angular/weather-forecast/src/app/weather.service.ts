import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

  api = "http://api.openweathermap.org/data/2.5/weather?q=";
  key = "&APPID=7d97071bf8d9827eb5fd95b585a8850b";

  constructor(private _http: Http) { }

  getWeather(loc, cb){
    this.api = this.api + loc + this.key;

    this._http.get(this.api).subscribe(
      (response) => {
        console.log("response in w service: ", response.json());
        cb(response.json());
      },
      (err) => {
        console.log("err in w service: ", err.json());
        cb(err.json());
      }
    );
  }

}
