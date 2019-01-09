import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { tblOrder } from 'src/app/model/orders-model';
import { OrderService } from 'src/app/order.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.less']
})

export class AllOrdersComponent implements OnInit {
  getPageName: string;  
  orderModel: tblOrder[];
  orderList: tblOrder[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrderList();
  }

  getPageDetail($event) {
    this.getPageName = $event;
  }

  getOrderList(): void{
    this.orderList = this.orderService.getOrderList();
//    alert(this.orderList[0].id);
  }

  displayedColumns: string[] = ['id', 'customer', 'salesman', 'status'];
  dataSource = new MatTableDataSource(this.orderList);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
