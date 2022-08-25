import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomerRoutingModule} from './customer-routing.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    ConfirmationPopoverModule,
    NgbPaginationModule
  ]
})
export class CustomerModule {
}
