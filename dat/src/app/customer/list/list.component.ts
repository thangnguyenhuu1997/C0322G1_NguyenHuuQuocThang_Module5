import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers: Customer[] = [];

  deleteId: number;
  deleteName: string;

  page = 1;
  pageSize = 5;

  constructor(private customerService: CustomerService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  openDelete(targetModal, customer: Customer) {
    this.deleteId = customer.id;
    this.deleteName = customer.name;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'md'
    });
  }

  onDelete() {
    this.customerService.delete(this.deleteId).subscribe(() => {
      this.ngOnInit();
      this.modalService.dismissAll();
    }, e => console.log(e));
  }
}
