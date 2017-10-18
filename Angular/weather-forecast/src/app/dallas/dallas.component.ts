import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  weather;
  
    constructor(private _weatherService: WeatherService) { }
  
    ngOnInit() {
      this._weatherService.getWeather("Dallas", (dataFromApi) => {
        this.weather = dataFromApi;
        console.log(this.weather);
      });
    }

}
