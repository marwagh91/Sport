import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css']
})
export class PlayersDetailsComponent implements OnInit {
id:any;
player:any;
  constructor(private activatedRoute:ActivatedRoute, private playerService:PlayerService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{
        console.log('here data',data.findedPlayers);
        this.player=data.findedPlayers;
        
      }
    )
  }

}
