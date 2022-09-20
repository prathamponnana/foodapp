import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodProductComponent } from './add-food-product/add-food-product.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "manager-dashboard", component: ManagerDashboardComponent},
  {path: "menu", component: ViewMenuComponent},
  {path: "add-foodproduct", component: AddFoodProductComponent},
  {path: "users", component: ViewUserComponent},
  {path: "edit-user/:id", component: EditUserComponent},
  {path: "view-orders", component: ViewOrdersComponent},
  {path: "create-orders", component: CreateOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
