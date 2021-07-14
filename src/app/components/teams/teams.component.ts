import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teams:any;
  constructor() { }

  ngOnInit() {
    this.teams=[
      {id:1,name:"team1", staduim:"stade1",fondation:1999},
      {id:2,name:"team2", staduim:"stade2",fondation:2000},
      {id:3,name:"team3", staduim:"stade3",fondation:2001},
      {id:4,name:"team4", staduim:"stade4",fondation:2002}
  
  
  
    ]
  }

}
