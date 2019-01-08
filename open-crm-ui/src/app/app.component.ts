import { Component } from '@angular/core';
import { pageContainer } from "../app/data/mock/mock-container-detail";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'open-crm-ui';
  getPageName: string;  

  getPageDetail($event) {
    this.getPageName = $event;
  }

}
