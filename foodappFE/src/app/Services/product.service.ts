import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveProd(prod:any,menuId:any){
    return this.http.post(`http://localhost:8080/foodproduct/${menuId}`,prod);
  }

  getFoodProduct(){
    return this.http.get("http://localhost:8080/foodproduct");
  }

  deleteProd(id:any){
    return this.http.delete(`http://localhost:8080/foodproduct/${id}`);
  }

  

}
