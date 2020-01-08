import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  profiles: any[] = [
    {
      id: "1",
      img: "../../../assets/pic2.jpg",
      name: "Pavan",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "2",
      img: "../../../assets/pic5.jpg",
      name: "Bhargav",
      mobile: 9550123123,
      email: "bhargav@gmail.com",
    },
    {
      id: "3",
      img: "../../../assets/pic3.jpg",
      name: "Shabranath",
      mobile: 789456461,
      email: "shabari@gmail.com",
    },
    {
      id: "4",
      img: "../../../assets/pic4.jpg",
      name: "Saikiran",
      mobile: 9789412412,
      email: "saikiran@gmail.com",
    },
    {
      id: "5",
      img: "../../../assets/pic5.jpg",
      name: "Narendra",
      mobile: 7822536223,
      email: "nari@gmail.com",
    }
  ];
}
