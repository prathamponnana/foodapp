import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { FoodorderService } from '../Services/foodorder.service';
import { FoodproductService } from '../Services/foodproduct.service';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(private foodProduct: FoodproductService, private foodOrder: FoodorderService, private item: ItemService) { }

  items: any[] = [];
  foodProductsRes: any;
  foodOrderRes: any;
  staff: any;
  itemsMap = new Map<number, number>();
  orderTotal = 0;

  ngOnInit(): void {
    this.foodProduct.getAllFoodProducts().subscribe(data => {
      this.foodProductsRes = data
      console.log(data);
    })
    this.staff = JSON.parse(localStorage.getItem("user")!);
  }

  addItem(id: any, price: number) {
    console.log(id);
    if (this.itemsMap.has(id)) {
      this.itemsMap.set(id, this.itemsMap.get(id)! + 1)
      this.orderTotal += price;
    } else {
      this.itemsMap.set(id, 1)
      this.orderTotal += price;
    }
  }

  deleteItem(id: any, price: number) {
    if (this.itemsMap.has(id)) {
      if (this.itemsMap.get(id) === 0) { } else {
        this.itemsMap.set(id, this.itemsMap.get(id)! - 1)
        this.orderTotal -= price;
      }
    }
  }

  createOrder(form: NgForm) {
    console.log(form.value);
    let foodOrder = {
      "status": "not-ready",
      "totalPrice": this.orderTotal,
      "customerName": form.value.customerName,
      "contactNumber": form.value.contactNumber
    }
    this.foodOrder.saveFoodOrder(this.staff.id, foodOrder).subscribe(data => {
      this.foodOrderRes = data;
      console.log(this.foodOrderRes);
      console.log(this.itemsMap);
      this.itemsMap.forEach((quantity, prodId) => {
        console.log("prodId", prodId);
        console.log("quantity", quantity);
        this.item.saveItem({
          "productId": prodId,
          "quanity": quantity
        }, this.foodOrderRes.data.id).subscribe(data => {
          console.log(data);
        })
      })
    })
  }
}
