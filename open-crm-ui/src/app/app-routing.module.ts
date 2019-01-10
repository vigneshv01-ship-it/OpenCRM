import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from "./ui/all-orders/all-orders.component";
import { DashboardComponent } from "./ui/dashboard/dashboard.component";
import { DefaultSearchComponent } from './ui/default-search/default-search.component';
import { AddOrderComponent } from './ui/add-order/add-order.component';

const routes: Routes = [
  {path: 'all-orders', component: AllOrdersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-order', component: AddOrderComponent},
  {path: '', component: DashboardComponent},
  {path: '**', component: DefaultSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
