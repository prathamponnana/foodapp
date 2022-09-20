import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-save-menu',
  templateUrl: './save-menu.component.html',
  styleUrls: ['./save-menu.component.css']
})
export class SaveMenuComponent implements OnInit {

  constructor(private menu: MenuService, private router:Router) { }
  result:any;
  ngOnInit(): void {
  }

  onSubmit(form:NgForm, userId:NgModel){
    console.log(form.value);   
    this.menu.saveMenu(form.value,userId.value).subscribe((data)=>{
      this.result = data;
      console.log(this.result);
      this.router.navigate(['/child']);
    })
  }

}
