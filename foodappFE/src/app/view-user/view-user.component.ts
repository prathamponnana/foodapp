import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  staffRes:any
  constructor(private user: UserService) { }

  deleteUserRes:any;
  ngOnInit(): void {
    this.user.getAllStaffs().subscribe(data=>{
      this.staffRes = data;
    })
  }

  deleteUser(userId:any){
    this.user.deleteUser(userId).subscribe(data=>{
      this.deleteUserRes = data;
      console.log(data);
      this.user.getAllStaffs().subscribe(data=>{
        this.staffRes = data;
      })
    })
  }

}
