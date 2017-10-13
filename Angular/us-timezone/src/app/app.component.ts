import { Component } from '@angular/core';

declare function require(name:string);
var moment = require('moment-timezone');

function toTimeZone(time, zone) {  
  return moment.tz(time, zone).format();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTimeZone = "";
  selectedBtn = "";
  
  timeData(t){
    this.myTimeZone = toTimeZone(Date.now(), t);   
    this.selectedBtn = t;
  }

  clearData(t){
    this.myTimeZone = "";    
    this.selectedBtn = t;
  }
}
