import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string='http://localhost:3003/users';

  constructor( private httpClient:HttpClient) { }
 
  addUser(user,avatar:File){
    let formData= new FormData;
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('confirmPassword', user.confirmPassword);
    formData.append('role', user.role);

    formData.append('avatar', avatar);
    return this.httpClient.post<{message:string}>(`${this.userUrl}/signup`, formData);
  }
  login(user){
    return this.httpClient.post<{message:string,user:any}>(`${this.userUrl}/login`, user);


  }
}

