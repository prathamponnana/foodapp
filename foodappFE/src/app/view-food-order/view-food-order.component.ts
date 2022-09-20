import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../Services/order.service';


@Component({
  selector: 'app-view-food-order',
  templateUrl: './view-food-order.component.html',
  styleUrls: ['./view-food-order.component.css']
})
export class ViewFoodOrderComponent implements OnInit {

  constructor(private order:OrderService,private router:Router) {}
  result:any;
  userId:any;
  ngOnInit(): void {

    this.order.getUserOrder().subscribe((data)=>{
      this.result = data;
      console.log(this.result.data);
    });
    this.userId = localStorage.getItem("userId");
  }


  deleteOrder(id:any){

    this.order.deleteOrder(id).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/viewFoodOrder']);
      this.order.getUserOrder().subscribe(res=>{
        this.result=res;
      })

    })

  }

  }


