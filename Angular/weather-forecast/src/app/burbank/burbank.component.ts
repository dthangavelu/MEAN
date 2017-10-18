import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  weather;
  
    constructor(private _weatherService: WeatherService) { }
  
    ngOnInit() {
      this._weatherService.getWeather("Burbank", (dataFromApi) => {
        this.weather = dataFromApi;
        console.log(this.weather);
      });
    }

}
