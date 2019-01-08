import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, AllOrdersComponent, DashboardComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AllOrdersComponent
  ]
})
export class UiModule { }
