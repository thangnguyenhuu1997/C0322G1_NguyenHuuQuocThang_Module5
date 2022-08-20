import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
