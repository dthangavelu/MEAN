import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  @Input() type;
  @Input() powerLevel;

  constructor() { }

  ngOnInit() {
  }
  
}
