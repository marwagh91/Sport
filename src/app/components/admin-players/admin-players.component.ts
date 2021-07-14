import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {
players:any;
  constructor( private router:Router, private playerService : PlayerService) { }
getPlayers(){
  this.playerService.getAllPlayers().subscribe(
    (data)=>{
      this.players = data.findedPlayers;
    }
  )
}
  ngOnInit() {
    this.getPlayers();
   
  }
  displayPlayer(id){
    this.router.navigate([`players-details/${id}`]);
    alert('display ID' +id);    
  }
  editPlayer(id){
    alert('edit ID' +id);
    this.router.navigate([`edit-players/${id}`]);
  }
  deletePlayer(id){
    this.playerService.deletePlayer(id).subscribe(
      (data)=>{
        console.log('Here data',data.message);
        this.getPlayers();
      }
    
    )    
  }

}
