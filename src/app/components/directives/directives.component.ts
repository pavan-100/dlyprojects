import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.css"]
})
export class DirectivesComponent implements OnInit {
  name: string = "pavan";

  toggle: boolean = true;

  hideMe() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }

  arr: any[] = [1, 2, 3, 5];

  hide: boolean = true;

  arry: any = true;

  constructor() {}

  ngOnInit() {}
}
