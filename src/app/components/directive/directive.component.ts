import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  switch:boolean = true;

  fuc: boolean = false;
  com: boolean = false;

  pav(){
    this.com = !this.com;
  }
  hidclr(){
    this.fuc = !this.fuc;
  }

  hide(){
    this.switch = !this.switch;
  }

  constructor() { }

  ngOnInit() {
  }

}
