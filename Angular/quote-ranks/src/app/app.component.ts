import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  all_quotes = [];

  quote = {
    content:"",
    author: "",
    rating: 0
  }

  addQuote(){
    this.all_quotes.push(this.quote);

    this.quote = {
      content:"",
      author: "",
      rating: 0
    }

  }

}
