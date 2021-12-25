import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import {NavbarComponent} from './components/navbar/navbar.component'
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: 'app',
    component: NavbarComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      }, 
      {
        path: 'Category/:id',
        component: ProductComponent,
        pathMatch: "full"
      },
      {
        path: 'AddProduct',
        component: FormsComponent,
        pathMatch: "full"
      },
      {
        path: 'Product/:id',
        component: ProductdetailComponent,
        pathMatch: "full"
      },
      {
        path: 'Cart',
        component: CartComponent,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
