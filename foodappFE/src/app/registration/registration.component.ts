import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService, private route: Router) { }
  ngOnInit(): void {
  }
  register(form: NgForm) {
    console.log(form.value);
    this.userService.registerUser(form.value).subscribe(res=>{
      console.log(res);
      if(form.value.data.role === "Staff"){
        this.route.navigate(["/manager-dashboard"])
      }else{
        this.route.navigate(["/login"])
      } 
    })
  }

}
