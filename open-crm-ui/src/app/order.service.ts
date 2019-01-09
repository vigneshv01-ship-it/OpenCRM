import { Injectable } from '@angular/core';
import { tblOrder } from "./model/orders-model";
import { orderList } from "./data/mock/mock-order-data";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrderList(): tblOrder[] {
    return orderList;
  }
}
