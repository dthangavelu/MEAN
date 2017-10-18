import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-washingtondc',
  templateUrl: './washingtondc.component.html',
  styleUrls: ['./washingtondc.component.css']
})
export class WashingtondcComponent implements OnInit {

  weather;
  
    constructor(private _weatherService: WeatherService) { }
  
    ngOnInit() {
      this._weatherService.getWeather("Washington", (dataFromApi) => {
        this.weather = dataFromApi;
        console.log(this.weather);
      });
    }

}
