import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.css']
})
export class TeamsDetailsComponent implements OnInit {
id:any;
team:any;
  constructor(private activatedRoute:ActivatedRoute, private teamService:TeamService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.teamService.getTeamById(this.id).subscribe(
      (data)=>{
        console.log('Here Data',data.findedTeams);
        this.team=data.findedTeams;
        
      }
    )
  }

}
