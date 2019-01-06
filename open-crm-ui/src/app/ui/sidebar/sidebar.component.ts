import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { navList } from "../../data/static/static-data";
import { pageContainer } from "../../data/mock/mock-container-detail";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})


export class SidebarComponent implements OnInit {
  sidebarNavList = navList;
  setPageContain: pageContainer;  
  
  @Output() pageContain = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.pageContain.emit("Welcome");
  }

  menuClick(menuItem) {
    //this.pageTitle = menuItem;
    this.pageContain.emit(menuItem);
  }

  displayNavMenu(idVal) {
    return this.sidebarNavList.filter(x => x.id == idVal);
  }
}
