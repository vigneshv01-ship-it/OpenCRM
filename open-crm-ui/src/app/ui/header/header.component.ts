import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../order.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  notificationCount: string = null;
  notificationStatus: string = "notifications_none";

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    setInterval(
      () => this.showNotification(), 10000000 //10000
    );
  }

  showNotification(): void {
    this.orderService.getOrderNotification()
    .subscribe(
      notification => 
      {
        if(notification == "0" || notification == null) {
          this.notificationStatus = "notifications_none";
          this.notificationCount = null;  
        }
        else {
          this.notificationStatus = "notifications_active";
          this.notificationCount = notification;    
        }
        
      }
    )
  }

}
