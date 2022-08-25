import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ContractRoutingModule} from './contract-routing.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContractRoutingModule,
    NgbPaginationModule
  ]
})
export class ContractModule {
}
