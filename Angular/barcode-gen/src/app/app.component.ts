import { Component } from '@angular/core';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomDiv(){
  let numberOfDiv = Math.floor(Math.random() * (16)) + 5;
  let div = [];
  for(let i = 0; i < numberOfDiv; i++){
    div.push(getRandomColor());
  }
  return div;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  numberOfDiv = getRandomDiv();
}

