import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-component',
  templateUrl: './quotes-component.component.html',
  styleUrls: ['./quotes-component.component.css']
})
export class QuotesComponentComponent implements OnInit {

  @Input() all_quotes;
  constructor() { }

  ngOnInit() {    
  }  

  sort(){
    this.all_quotes.sort(function(a, b) {
      return parseInt(b.rating) - parseInt(a.rating);
    });
    console.log(this.all_quotes);
  }

  voteUp(index){    
    this.all_quotes[index].rating = this.all_quotes[index].rating + 1;
    this.sort();
  }

  voteDown(index){
    this.all_quotes[index].rating = this.all_quotes[index].rating - 1;
    this.sort();
  }

  delete(index){
    this.all_quotes.splice(index, 1);
    this.sort();
  }

}
