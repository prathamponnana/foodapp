import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user:any){
    return this.http.post("http://localhost:8080/user", user);
  }

  loginUser(user:any){
    return this.http.post("http://localhost:8080/login", user);
  }

  getAllStaffs(){
    return this.http.get("http://localhost:8080/getallstaffs");
  }

  getUserById(id:number){
    return this.http.get(`http://localhost:8080/user/${id}`)
  }

  updateUser(user:any){
    return this.http.put("http://localhost:8080/user",user)
  }

  deleteUser(userId:number){
    return this.http.delete(`http://localhost:8080/user/${userId}`)
  }
}
