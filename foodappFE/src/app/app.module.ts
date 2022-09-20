import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SaveFoodProductComponent } from './save-food-product/save-food-product.component';
import { ViewFoodOrderComponent } from './view-food-order/view-food-order.component';
import { ViewFoodProductComponent } from './view-food-product/view-food-product.component';
import { SaveFoodOrderComponent } from './save-food-order/save-food-order.component';
import { SaveMenuComponent } from './save-menu/save-menu.component';
import { ChildComponent } from './child/child.component';
import { SaveUserComponent } from './save-user/save-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ParentComponent } from './parent/parent.component';
import { EditOrderComponent } from './edit-order/edit-order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerDashboardComponent,
    RegistrationComponent,
    SaveFoodProductComponent,
    ViewFoodOrderComponent,
    ViewFoodProductComponent,
    SaveFoodOrderComponent,
    SaveMenuComponent,
    ChildComponent,
    SaveUserComponent,
    ViewUserComponent,
    ParentComponent,
    EditOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
