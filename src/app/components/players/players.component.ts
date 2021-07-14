import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
players:any;
  constructor() { }

  ngOnInit() {
  this.players=[
    {id:1,name:"ahmed",number:4,poste:"attacker",age:22,img:''},
    {id:2,name:"marwen",number:7,poste:"attacker",age:18,img:''},
    {id:3,name:"amir",number:9,poste:"attacker",age:24,img:''},
    {id:4,name:"med",number:11,poste:"attacker",age:20,img:''}



  ]
  }

}
