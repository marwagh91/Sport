import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm:FormGroup;
  player:any = {};
  id:any;
  title:any;
  imagePreview: string;


  constructor(private formBuilder : FormBuilder, private playerService:PlayerService, private activatedRoute:ActivatedRoute) {

   }

  ngOnInit() {

    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title='Edit';
      this.playerService.getPlayerById(this.id).subscribe(
        (data)=>{
          this.player=data.findedPlayers;

        }
      )
    } else {
      this.title='Add';

      
    }
    this.addPlayerForm =this.formBuilder.group({
      name:[''],
      poste:[''],
      number:[''],
      age:[''],
      img:['']


    });
  }
  submitPlayer(){
    if(this.id){
      //edit Course
      this.playerService.editPlayer(this.player).subscribe(
        (data)=>{
          console.log('Here data from BE', data.message);
        }
      )
      // add Course
    }else{
      this.playerService.addPlayer(this.player, this.addPlayerForm.value.img).subscribe(
        (data) =>{
          console.log('data from BE',data);
        }
      )
  
    }
  // console.log('here my object ', this.course);
  
  
    // var courses = JSON.parse(localStorage.getItem("courses")||"[]");
    // var idCourse = JSON.parse(localStorage.getItem("idCourse")||"1");
    // this.course.id = idCourse;
    // courses.push(this.course);
    // localStorage.setItem("courses",JSON.stringify(courses));
    // localStorage.setItem("idCourse", idCourse +1);
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addPlayerForm.patchValue({ img: file });
    this.addPlayerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
  
  // addPlayer(){
  //   this.playerService.addPlayer(this.player).subscribe(
  //     (data)=>{
  //       console.log('Here Data From BE',data);
        
  //     }
  //   )

  // }
  // addPlayer(){
  //   var players=JSON.parse(localStorage.getItem("players")||"[]");
  //   var idPlayer=JSON.parse(localStorage.getItem("idPlayer")||"2");
  //   this.player.id=idPlayer;
  //   players.push(this.player);
  //   localStorage.setItem("players",JSON.stringify(players));
  //   localStorage.setItem("idPlayer",idPlayer+1);
  // }

}
