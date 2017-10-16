import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  human:number;
  saiyan:number;
  superSaiyan:number;
  superSaiyanTwo:number;
  superSaiyanThree:number;
  superSaiyanFour:number;

  type1 = "Human";
  type2 = "Saiyan";
  type3 = "SuperSaiyan";
  type4 = "SuperSaiyanTwo";
  type5 = "SuperSaiyanThree";
  type6 = "SuperSaiyanFour";

  power:number;

  calculatePower(){
    console.log("Power: ", this.power);

    this.human = this.power;
    this.saiyan = this.power * 10;
    this.superSaiyan = this.power * 90;
    this.superSaiyanTwo = this.power * 150;
    this.superSaiyanThree = this.power * 250;
    this.superSaiyanFour = this.power * 500;
  }
}
