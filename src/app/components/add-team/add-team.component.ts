import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm :FormGroup;
  team:any={};
  id:any;
  title:any;
  imagePreview: string;

  constructor(private formBuilder : FormBuilder, private teamService:TeamService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title='Edit';
      this.teamService.getTeamById(this.id).subscribe(
        (data)=>{
          this.team=data.findedTeams;

        }
      )
    } else {
      this.title='Add';

      
    }
    this.addTeamForm=this.formBuilder.group({
      name: [''],
      staduim:[''],
      fondation:[''],
      img:['']


    });
   
   
  }
  submitTeam(){
    if(this.id){
      //edit Course
      this.teamService.editteam(this.team).subscribe(
        (data)=>{
          console.log('Here data from BE', data.message);
        }
      )
      // add Course
    }else{
      this.teamService.addTeam(this.team, this.addTeamForm.value.img).subscribe(
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
    this.addTeamForm.patchValue({ img: file });
    this.addTeamForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
  
  // addTeam(){
  //   this.teamService.addTeam(this.team).subscribe(
  //     (data)=>{
  //       console.log('Here Data from BE',data);
        
  //     }
  //   )

  // }
  // addTeam(){
  //   let teams=JSON.parse(localStorage.getItem ("teams")||"[]");
  //   let idTeam = JSON.parse(localStorage.getItem("idTeam")||"2");
  //   this.team.id=idTeam;
  //   teams.push(this.team);
  //   localStorage.setItem("teams",JSON.stringify(teams));
  //   localStorage.setItem("idTeam", idTeam+1);
  // }

}
