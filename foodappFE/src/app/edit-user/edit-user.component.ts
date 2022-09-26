import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route :ActivatedRoute, private router: Router, private user: UserService, private toast : ToastrService) { }
  selectedUser:any;
  updateUserRes:any;
  ngOnInit(): void {
    let id = this.route.snapshot.params['id']; 
    this.user.getUserById(id).subscribe(data=>{
      this.selectedUser = data
    })
  }

  editUser(form: NgForm){
   console.log(form.value);
   this.user.updateUser(form.value).subscribe(data=>{
    this.updateUserRes = data;
    this.toast.success("Successfully edited")
    this.router.navigate(["/users"])
   })
  }

}
