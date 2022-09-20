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

  constructor(private userService: UserService,private router:Router) { }
  user:any;
  ngOnInit(): void {
    
  }

  onSubmit(form:NgForm){
    this.user = form.value;
    console.log(form.value);
    this.user.role = "manager";
    this.userService.regUser(form.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/parent']);
    })
  }
}
