import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl:string = 'http://localhost:3003/matchs';


  constructor(private httpClient : HttpClient) { }
  getAllMatchs(){
    return this.httpClient.get<{findedMatches:any}>(this.matchUrl);
  }


  getMatchById(id){
    return this.httpClient.get<{findedMatches:any}>(`${this.matchUrl}/${id}`);
  }

  deleteMatch(id){
    return this.httpClient.delete<{message:string}>(`${this.matchUrl}/${id}`);

  }

  addMatch(match,img:File){
    let formData = new FormData;
    formData.append('teamOne',match.teamOne);
    formData.append('teamTwo',match.teamTwo);
    formData.append('scoreOne',match.scoreOne);
    formData.append('scoreTwo',match.scoreTwo);
    formData.append('img',img);
    return this.httpClient.post<{findedMatchs:any}>(this.matchUrl, formData);
  }
  editMatch(match){
    return this.httpClient.put<{message:string}>(`${this.matchUrl}/${match.id}`, match);

  }
}
