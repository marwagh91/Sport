import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-admin-matchs',
  templateUrl: './admin-matchs.component.html',
  styleUrls: ['./admin-matchs.component.css']
})
export class AdminMatchsComponent implements OnInit {
  matchs:any;
  constructor( private router:Router, private matchService : MatchService) { }
getMatches(){
  this.matchService.getAllMatchs().subscribe(
    (data)=>{
      this.matchs = data.findedMatches;
    }
  );
}
  ngOnInit() {
    this.getMatches();
    
  }
  
  displayMatch(id){
    this.router.navigate([`matchs-details/${id}`]);
    alert('display ID' +id);
  }
  editMatch(id){
    alert('edit ID' +id);
    this.router.navigate([`edit-matchs/${id}`])
  }
  deleteMatch(id){
    this.matchService.deleteMatch(id).subscribe(
      (data)=>{
        console.log('Here data',data.message);
        this.getMatches();
      }
    
    )    
  }

}
