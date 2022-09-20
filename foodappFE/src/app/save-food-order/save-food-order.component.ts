import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-save-food-order',
  templateUrl: './save-food-order.component.html',
  styleUrls: ['./save-food-order.component.css']
})
export class SaveFoodOrderComponent implements OnInit {

  constructor(private order:OrderService, private router: Router) { }
  userId:any;
  data:any;
  ngOnInit(): void {
  }

  onSubmit(form:NgForm,userId:NgModel){
    console.log(form.value);
    this.order.saveProd(form.value,userId.value).subscribe(res=>{
      console.log(res);
      this.data = res;
    
      this.router.navigate(['/parent']);

      localStorage.setItem("userId",form.value.userId);
      console.log(localStorage.getItem("userId"));
      
    })
  }

}
