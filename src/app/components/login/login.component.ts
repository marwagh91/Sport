import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  user:any={};
  Msg:any;

  constructor(private formBuilder : FormBuilder, private router: Router, private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
  login(){
    console.log('Here User',this.user);
    this.userService.login(this.user).subscribe(
      (data)=>{
        console.log('Here data from BE', data.message);
        if(data.message=='2'){
          // traitement si user a connecte avec sucees
        if (data.user.role == 'admin') {
          this.router.navigate(['admin']);
    
        } else {
          this.router.navigate(['']);
        }
      } else {
        this.Msg ="email/password invalid";
        // document.getElementById('errorMsg').innerHTML='email/password invalid';
        // document.getElementById('errorMsg').style.color='red';

      }
        
      }
    )

  }
  // login(l: any) {
  //   let users = JSON.parse(localStorage.getItem("users") || "[]");
  //   let idUser = JSON.parse(localStorage.getItem("idUser") || "1");
  //   l.id = idUser;
  //   users.push(l);
  //   localStorage.setItem("users", JSON.stringify(users));
  //   localStorage.setItem("idUser", idUser + 1);

  //   this.router.navigate(['']);


  // }

}
