import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  constructor(private menu: MenuService, private route: Router) { }
  res: any;

  ngOnInit(): void {
  }
  manager = JSON.parse(localStorage.getItem("user")!);
  createMenu(){
    this.menu.createMenu(this.manager.id).subscribe(data=>{
      this.res = data;
      if(this.res.error){
        console.log(this.res.message);
      }else if(!this.res.error){
        console.log(this.res.message);        
      }
    })
  }
  viewMenu(){
    this.route.navigate(["/menu"])
  }
  viewStaff(){
    this.route.navigate(["/users"])
  }
  registerUser(){
    this.route.navigate(["/registration"])
  }

}
