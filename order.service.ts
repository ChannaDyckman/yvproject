import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdataOrder } from '../models/idata-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit {

  constructor(private httpClient:HttpClient) { }
  
  ngOnInit(): void {
   
  }

  getOrder():Observable<IdataOrder[]>{
    let url="assets/tableData.json" //בפרויקט אמיתי הייתי פונה לשרת אמיתי 
   return  this.httpClient.get<IdataOrder[]>(url)
  }

}
