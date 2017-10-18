import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather;
  
    constructor(private _weatherService: WeatherService) { }
  
    ngOnInit() {
      this._weatherService.getWeather("Chicago", (dataFromApi) => {
        this.weather = dataFromApi;
        console.log(this.weather);
      });
    }

}
