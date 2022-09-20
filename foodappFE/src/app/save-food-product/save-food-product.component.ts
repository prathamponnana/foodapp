import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-save-food-product',
  templateUrl: './save-food-product.component.html',
  styleUrls: ['./save-food-product.component.css']
})
export class SaveFoodProductComponent implements OnInit {

  constructor(private prod: ProductService, private router:Router) { }
  food:any
  ngOnInit(): void {
  }

  onSubmit(form:NgForm,menuId:NgModel){
    console.log(form.value);
    this.prod.saveProd(form.value,menuId.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/child']);
    })
  }

}
