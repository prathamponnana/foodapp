import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { LoginComponent } from './login/login.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ParentComponent } from './parent/parent.component';
import { RegistrationComponent } from './registration/registration.component';
import { SaveFoodOrderComponent } from './save-food-order/save-food-order.component';
import { SaveFoodProductComponent } from './save-food-product/save-food-product.component';
import { SaveMenuComponent } from './save-menu/save-menu.component';
import { SaveUserComponent } from './save-user/save-user.component';
import { ViewFoodOrderComponent } from './view-food-order/view-food-order.component';
import { ViewFoodProductComponent } from './view-food-product/view-food-product.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegistrationComponent},
  {path:"managerDashboard", component:ManagerDashboardComponent},

  {path:"parent/saveFoodProduct", component:SaveFoodProductComponent},
  {path:"parent/viewFoodProduct", component:ViewFoodProductComponent},
  {path:"parent/viewFoodOrder", component:ViewFoodOrderComponent},
  {path:"parent/saveUser", component:SaveUserComponent},
  {path:"parent/viewUser", component:ViewUserComponent},
  {path:"parent/saveMenu", component:SaveMenuComponent},

  {path:"child/saveFoodOrder", component:SaveFoodOrderComponent},
  {path:"child/viewFoodOrder", component:ViewFoodOrderComponent},
  {path:"child/viewFoodProduct", component:ViewFoodProductComponent},  
  {path:"edit-order/:id", component:EditOrderComponent},

  {path:"parent", component:ParentComponent},
  {path:"child", component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
