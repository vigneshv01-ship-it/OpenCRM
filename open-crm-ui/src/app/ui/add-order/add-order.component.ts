import { Component, OnInit } from '@angular/core';
import { OrderService } from "src/app/order.service";
import { customers } from "src/app/model/master-model";
import {FormBuilder, FormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.less']
})
export class AddOrderComponent implements OnInit {
  isLinear = false;
  customerFormGroup: FormGroup;
  productFormGroup: FormGroup;
  customerList: customers[];
  getCustomerAddress: String;
  buttonClick: string;

  constructor(
              private _formBuilder: FormBuilder, 
              private orderService: OrderService
           ) { }

  ngOnInit() {

    this.getCustomerList();
    
    this.customerFormGroup = this._formBuilder.group({
      customerCtrl: ['', Validators.required]
    });
    this.productFormGroup = this._formBuilder.group({
      productCtrl: ['', Validators.required]
    });
  }

  getCustomerList(): void {
    this.orderService.getCustomerList()
      .subscribe(
        customers => {
          this.customerList = customers;
          console.log(customers);
        }
      )
  }

  onCustomerNameSelect(value: string[]): void {
    this.getCustomerAddress = value[1].trim();
    console.log(this.getCustomerAddress);
  }

  addOrder(): void {
      this.buttonClick = "Button Clicked!"
  }

}
