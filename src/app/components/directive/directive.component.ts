import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  switch:boolean = true;
  hide(){
    this.switch = !this.switch;
  }

  constructor() { }

  ngOnInit() {
  }

}
