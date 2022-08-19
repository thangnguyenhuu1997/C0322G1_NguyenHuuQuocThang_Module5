import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
// @ts-ignore
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];

  customerDelete: Customer = {
    id: 0,
    code: '',
    typeCustomer: {
      id: '',
      name: ''
    },
    name: '',
    gender: '',
    birthday: '',
    idCard: 0,
    phone: 0,
    email: '',
    address: ''
  };
  page: number;
  searchValue: string;

  constructor(private customerService: CustomerService, private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(value => {
      this.customerList = value ;
      this.toastr.success('Loaded successfully!', 'Customer!');
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }
  getAll() {
    this.customerService.getAll().subscribe(customerList => {
      this.customerList = customerList;
      console.log('kk');
    });
  }
  setIdCustomerDelete(customer) {
    this.customerDelete = customer;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customerDelete.id).subscribe( result => {
      this.getAll();
    });
  }
  doSearch() {
    this.searchValue = this.searchValue.trim();
    this.customerService.search(this.searchValue).subscribe(
      (data) => this.customerList = data
    );
  }
}
