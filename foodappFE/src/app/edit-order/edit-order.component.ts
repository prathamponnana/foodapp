import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../Services/order.service';


@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private order: OrderService, private router:Router) { }
  result:any;
  selectedOrder:any;
  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.order.getUserOrder().subscribe((data)=>{
    this.result = data;

    for(let f of this.result){
     
      if(f.id === id){
        this.selectedOrder = f;
        console.log(this.selectedOrder);
    
      }
    }
  });
} 


editOrder(form:NgForm){
  this.order.editOrder(this.selectedOrder.id,form.value).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['child/viewFoodOrder'])
      this.order.getUserOrder().subscribe((data)=>{
        this.result = data;
      });
  })

}


}
