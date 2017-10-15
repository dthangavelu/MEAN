import { Component } from '@angular/core';

function createSwitch(n: number){
  let temp: Array<boolean>=[];
  for(let i:number = 0; i < n; i++){
    temp.push(false);
  }
  return temp;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switch:Array<boolean> = createSwitch(10);
    
  switchOp(switchIndex){ 
    this.switch[switchIndex] = !this.switch[switchIndex];    
   }
}
