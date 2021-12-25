import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FormsComponent } from './components/forms/forms.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {ProductService} from 'src/app/services/product.service';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule} from '@angular/forms';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CartComponent } from './components/cart/cart.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CartService } from './services/cart.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    FormsComponent,
    ProductdetailComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonToggleModule
  ],
  providers: [ProductService,CartService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }