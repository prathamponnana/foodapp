import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-view-food-product',
  templateUrl: './view-food-product.component.html',
  styleUrls: ['./view-food-product.component.css']
})
export class ViewFoodProductComponent implements OnInit {

  constructor(private prod: ProductService) { }
  result:any;
  ngOnInit(): void {

    this.prod.getFoodProduct().subscribe((data)=>{
      this.result = data;
      console.log(this.result.data);
    });
  }

  deleteProduct(id:any){
    this.prod.deleteProd(id).subscribe((result)=>{
      console.log(result);
      this.prod.getFoodProduct().subscribe((data)=>{
        this.result = data;
      });
    })
  }

}
