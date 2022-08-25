import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../model/customer-type';
import {CustomerService} from '../service/customer.service';
import {CustomerTypeService} from '../service/customer-type.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerTypes: CustomerType[];
  // tslint:disable-next-line:ban-types
  private allCustomer: Object;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getTypeCustomer();
    this.customerForm = new FormGroup({
      id: new FormControl(0),
      code: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
      name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
      phone: new FormControl('', [Validators.required,
        Validators.pattern('^090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      typeCustomer: new FormControl('', Validators.required)
    });
  }

  addCustomer(customers) {
    this.customerService.addCustomer(customers).subscribe((response) => {
      this.getLatestCustomer();
    });
  }

  getLatestCustomer() {
    this.customerService.getAll().subscribe((response) => {
      this.allCustomer = response;
    });
  }

  onSubmit() {
    const customer = this.customerForm.value;
    this.customerService.addCustomer(customer).subscribe(() => {
      this.toastr.success('Add Customer successfully!', 'Customer!');
      this.router.navigateByUrl('/customer');
      this.customerForm.reset();
    });
  }

  getTypeCustomer() {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypes = value;
    });
    console.log(this.customerTypes);
  }
}
