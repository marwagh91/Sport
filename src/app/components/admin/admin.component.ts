import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentDate: Date;
  title:string= 'Admin';


  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();

  }

}
