import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';


import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './templates/footer/footer.component';
import {HeaderComponent} from './templates/header/header.component';
import { ContractComponent } from './model/contract/contract.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContractComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
