import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
result:any;
  constructor(private user:UserService, private router: Router) { }

  ngOnInit(): void {
    this.user.getUser().subscribe((data)=>{
      this.result = data;
      console.log(this.result.data);
    });
  }

  deleteUser(id:any){

    this.user.deleteUser(id).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/viewFoodOrder']);
      this.user.getUser().subscribe(res=>{
        this.result=res;
      })

    })

  }

}
