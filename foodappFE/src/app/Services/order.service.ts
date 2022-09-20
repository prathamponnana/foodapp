import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  saveProd(order:any,userId:any){
    return this.http.post(`http://localhost:8080/foodorder/${userId}`,order);
  }

  getUserOrder(){
    return this.http.get("http://localhost:8080/foodorder");
  }

  editOrder(userId:any,order:any){
    return this.http.put(`http://localhost:8080/foodorder/${userId}`,order);
  }

  deleteOrder(id:any){
    return this.http.delete(`http://localhost:8080/foodorder/${id}`)
  }
}
