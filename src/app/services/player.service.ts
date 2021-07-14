import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl:string='http://localhost:3003/players';

  constructor(private httpClient:HttpClient) { }
  getAllPlayers(){
    return this.httpClient.get<{findedPlayers:any}>(this.playerUrl);
  }
  getPlayerById(id){
    return this.httpClient.get<{findedPlayers:any}>(`${this.playerUrl}/${id}`);
  }
  deletePlayer(id){
    return this.httpClient.delete<{message:string}>(`${this.playerUrl}/${id}`);

  }
  addPlayer(player, img:File){
    let formData= new FormData;
    formData.append('name;',player.name);
    formData.append('poste',player.poste);
    formData.append('number',player.number);
    formData.append('age',player.age);
    formData.append('img',img);
    return this.httpClient.post(this.playerUrl,formData);

  }
  editPlayer(player){
    return this.httpClient.put<{message:string}>(`${this.playerUrl}/${player.id}`, player)
  }
}
