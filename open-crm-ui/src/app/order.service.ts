import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { tblOrder } from "./model/orders-model";
import { orderList } from "./data/mock/mock-order-data";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrderList(): Observable<tblOrder[]> {
    return this.http.get<tblOrder[]>("https://script.google.com/macros/s/AKfycbxLboi7OM7H7xc-Rwe0QvJVh8jk8HdLAPznItq7E2OOrQmLSYM/exec")
  }
}
