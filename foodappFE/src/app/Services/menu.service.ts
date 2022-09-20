import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  saveMenu(menu:any,userId:any){
    return this.http.post(`http://localhost:8080/menu/${userId}`,menu);
  }
}
