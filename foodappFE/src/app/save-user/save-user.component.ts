import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {
  user:any;
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.user = form.value;
    console.log(form.value);
    this.user.role = "staff";
    this.userService.regUser(form.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/parent']);
    })
  }

}
