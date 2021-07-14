import { Component, OnInit, ɵgetPlayers } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm:FormGroup;
  match:any={};
  id:any;
  title:any;
  imagePreview: string;
  constructor( private formBuilder :FormBuilder, private matchService:MatchService, private activatedRoute:ActivatedRoute) {

   }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title='Edit';
      this.matchService.getMatchById(this.id).subscribe(
        (data)=>{
          this.match=data.findedMatches;

        }
      )
    } else {
      this.title='Add';

      
    }
    this.addMatchForm =this.formBuilder.group({
      teamOne:[''],
      teamTwo:[''],
      scoreOne:[''],
      scoreTwo:[''],
      img:['']
    });
  }
  submitMatch(){
    if(this.id){
      //edit Course
      this.matchService.editMatch(this.match).subscribe(
        (data)=>{
          console.log('Here data from BE', data.message);
        }
      )
      // add Course
    }else{
      this.matchService.addMatch(this.match, this.addMatchForm.value.img).subscribe(
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
    this.addMatchForm.patchValue({ img: file });
    this.addMatchForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
  
  // addMatch(){
  //   var matchs= JSON.parse(localStorage.getItem("matchs")||"[]");
  //   var idMatch= JSON.parse(localStorage.getItem("idMatch")||"2");
  //   this.match.id=idMatch;
  //   matchs.push(this.match);
  //   localStorage.setItem("matchs",JSON.stringify(matchs));
  //   localStorage.setItem("idMatch", idMatch+1);
  // }

}
