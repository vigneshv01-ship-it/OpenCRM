import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from "./ui/all-orders/all-orders.component";
import { DashboardComponent } from "./ui/dashboard/dashboard.component";

const routes: Routes = [
  {path: '*', redirectTo: '/dashboardFull', pathMatch: 'full'},
  {path: 'all-orders', component: AllOrdersComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
