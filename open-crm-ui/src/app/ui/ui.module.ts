import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, ReactiveFormsModule, FormsModule, FormGroup, Validators} from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { DefaultSearchComponent } from './default-search/default-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from '../app-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, AllOrdersComponent, DashboardComponent, DefaultSearchComponent, AddOrderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatProgressBarModule,
    MatStepperModule,
    MatBadgeModule,
    MatSelectModule,
    ReactiveFormsModule,
    //FormBuilder,
    FormsModule,
    //Validators
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AllOrdersComponent
  ]
})
export class UiModule { }
