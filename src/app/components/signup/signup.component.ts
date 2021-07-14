import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPassword';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm :FormGroup;
url:any;
  imagePreview: string;
constructor(private formBuilder :FormBuilder,private router:Router , private userService:UserService) { }

  ngOnInit() {
    this.url = this.router.url;

    this.signupForm=this.formBuilder.group({
      firstName:['',[Validators.maxLength(5),Validators.required]],
      lastName:['',[Validators.minLength(4),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(8),Validators.required]],
      confirmPassword:['',[Validators.minLength(8),Validators.required]],
      tel:[''],
      avatar:['']

    },
    {
      validator: MustMatch('password','confirmPassword')
      }
    );
  }
  signup(user) {
    console.log('Here my user', user);
    if (this.url == '/signup') {
      // on a ajouter l'attribut role a l'objet user et  on l'a affecte user
      user.role = 'user';

    } else {
      user.role = 'admin';
    }


    this.userService.addUser(user, this.signupForm.value.avatar).subscribe(
      (data) => {
        console.log('Data from BE ',data.message);

      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ avatar: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
  // signup(s:any){
  //   let Users = JSON.parse(localStorage.getItem("Users")||"[]");
  //   let idUsers = JSON.parse(localStorage.getItem("idUsers")||"1");
  //   s.id=idUsers;
  //   Users.push(s);
  //   localStorage.setItem("Users",JSON.stringify(Users));
  //   localStorage.setItem("idUsers",idUsers+1);
 
  //   this.router.navigate(['login']);
  // }

}
