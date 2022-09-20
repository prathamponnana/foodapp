import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService, private router:Router) { }
  result:any;
  ngOnInit(): void {
  }

  login(form:NgForm){
    console.log(form.value);
    this.user.login(form.value).subscribe((data)=>{
      this.result = data;
      console.log(this.result);
      if(this.result.error){
        window.alert("Invalid Credentials");
      }
      else{
        if(this.result.data.role === "staff"){
          this.router.navigate(['/child']);
        }
        else{
          this.router.navigate(['/parent']);
        }
      }
      console.log();
      
    })
  }


}
