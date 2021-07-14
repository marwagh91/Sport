import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
matchs:any;
  constructor() { }

  ngOnInit() {
    this.matchs=[
      {id:1,scoreOne:2,scoreTwo:3,teamOne:"team 1",teamtwo:"team 1"},
      {id:2,scoreOne:1,scoreTwo:2,teamOne:"team 2",teamtwo:"team 2"},
      {id:4,scoreOne:3,scoreTwo:0,teamOne:"team 3",teamtwo:"team 3"},
      {id:3,scoreOne:0,scoreTwo:2,teamOne:"team 4",teamtwo:"team 4"}
    ]
  }

}
