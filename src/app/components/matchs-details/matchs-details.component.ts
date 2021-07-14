import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchs-details',
  templateUrl: './matchs-details.component.html',
  styleUrls: ['./matchs-details.component.css']
})
export class MatchsDetailsComponent implements OnInit {
id:any;
match:any;
  constructor(private activatedRoute:ActivatedRoute, private matchService:MatchService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      (data)=>{
        console.log('Here data',data.findedMatches);
        this.match=data.findedMatches;
        
      }
    )
  }

}
