import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { tblOrder } from 'src/app/model/orders-model';
import { OrderService } from 'src/app/order.service';
import { orderList } from 'src/app/data/mock/mock-order-data';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.less']
})

export class AllOrdersComponent implements OnInit {
  getPageName: string;  
  orderModel: tblOrder[];
  orderList1: any[];

  constructor(private orderService: OrderService) {
    
   }

  ngOnInit() {
    this.getOrderList();
  }

  getPageDetail($event) {
    this.getPageName = $event;
  }

  getOrderList(): void{
    this.orderService.getOrderList()
    .subscribe(orderList => 
      this.dataSource = new MatTableDataSource(orderList)
      )
    
  }

  displayedColumns: string[] = ['id', 'customer', 'salesman', 'status'];
  dataSource: any;

  getDataSource(): void {

  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
