import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  idModal: number;
  nameModal: string;
  p: number = 1;
  searchForm: FormGroup;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    this.searchForm = new FormGroup({
      searchName: new FormControl()
    });
  }


  ngOnInit(): void {
    if (this.customers == null) {
      console.log('ko co du lieu');
    }
    this.getAll();
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
    }, error => {
    });
  }

  deleteCustomer(idModal: number) {
    this.customerService.delete(idModal).subscribe(next => {
      // @ts-ignore
      $('#exampleModal' + idModal).modal('hide');
    }, error => {}, () => {
      this.ngOnInit();
    });
  }

  mo(id: number, name: string) {
    this.idModal = id;
    this.nameModal = name;
  }

  searchByName() {
    console.log(this.searchForm.value);
    this.customerService.getAllCustomerByName(this.searchForm.value.searchName).subscribe(data => {
      this.customers = data;
    });
  }
}
