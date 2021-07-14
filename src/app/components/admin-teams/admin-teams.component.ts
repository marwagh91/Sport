import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {
  teams:any;
  constructor(private router:Router, private teamService : TeamService) { }
getTeams(){
  this.teamService.getAllTeam().subscribe(
    (data)=>{
      this.teams = data.findedTeams;
    }
  );
}
  ngOnInit() {
   this.getTeams();
  }
  displayTeam(id){
    this.router.navigate([`teams-details/${id}`]);
    alert('display ID' +id);    
  }
  editTeam(id){
    alert('edit ID' +id);
    this.router.navigate([`edit-teams/${id}`]);
  }
  deleteTeam(id){
    this.teamService.deleteTeam(id).subscribe(
      (data)=>{
        console.log('Here data',data.message);
        this.getTeams();
      }
    
    )        
  }

}
