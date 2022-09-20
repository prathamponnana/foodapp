import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  regUser(user:any){
    return this.http.post("http://localhost:8080/user",user);
  }
  
  login(user:any){
    return this.http.post("http://localhost:8080/login",user);
  }

  getUser(){
    return this.http.get("http://localhost:8080/user");
  }
  

  deleteUser(id:any){
    return this.http.delete(`http://localhost:8080/user/${id}`)
  }
}
