import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { LoginComponent } from './authentication/login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchaseComponent } from './purchases/purchase/purchase.component';
import { NewPurchaseComponent } from './purchases/new-purchase/new-purchase.component';
import { SellsComponent } from './sells/sells.component';
import { SellComponent } from './sells/sell/sell.component';
import { NewSellComponent } from './sells/new-sell/new-sell.component';
import { UsersComponent } from './authentication/users/users.component';
import { UserComponent } from './authentication/users/user/user.component';
import { NewUserComponent } from './authentication/users/new-user/new-user.component';
import { MaterialModule } from './app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SigninComponent,
    LoginComponent,
    ProductsComponent,
    ProductComponent,
    NewProductComponent,
    PurchasesComponent,
    PurchaseComponent,
    NewPurchaseComponent,
    SellsComponent,
    SellComponent,
    NewSellComponent,
    UsersComponent,
    UserComponent,
    NewUserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
