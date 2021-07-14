import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl:string='http://localhost:3003/teams';

  constructor(private httpClient:HttpClient) { }
  getAllTeam(){
    return this.httpClient.get<{findedTeams:any}>(this.teamUrl);
  }
  getTeamById(id){
    return this.httpClient.get<{findedTeams:any}>(`${this.teamUrl}/${id}`);
  }
  deleteTeam(id){
    return this.httpClient.delete<{message:string}>(`${this.teamUrl}/${id}`)

  }
  addTeam(team, img:File){
    let formData = new FormData;
    formData.append('name',team.name);
    formData.append('staduim',team.staduim);
    formData.append('fondation',team.fondation);
    formData.append('img',img);
    return this.httpClient.post<{findedTeams:any}>(this.teamUrl,formData);

  }
  editteam(team){
    return this.httpClient.put<{message:string}>(`${this.teamUrl}/${team.id}`, team)
  }
}
