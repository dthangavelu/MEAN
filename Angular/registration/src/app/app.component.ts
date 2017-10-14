import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  user = new User();
  submitted:boolean = false;
  user_index:number;

  onSubmit(){
    this.user_index = this.users.length;    
    this.users.push(this.user);
    this.submitted = true;    
    this.user = new User();
  }
}
