import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BkWallComponent } from './bk-wall/bk-wall.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

{path:'', redirectTo:'products', pathMatch:'full'},


  {path:'products', component:ProductComponent},
  {path:'cart', component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:AdminDashboardComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'userlogin',component:LoginComponent},
  {path:'wall',component:BkWallComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
