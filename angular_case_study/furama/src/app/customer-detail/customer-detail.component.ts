import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  id: number;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
    });
  }
}
