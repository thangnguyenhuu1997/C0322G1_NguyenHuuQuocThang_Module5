import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerTypeService} from '../service/customer-type.service';
import {CustomerService} from '../service/customer.service';
import {CustomerType} from '../model/customer-type';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerTypes: CustomerType[];
  customer: Customer;
  customerFormEdit: FormGroup;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getTypeCustomer();
    this.customerFormEdit = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
      name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
      phone: new FormControl('', [Validators.required,
        Validators.pattern('^090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      typeCustomer: new FormControl('', Validators.required),
    });
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
      this.customerFormEdit.patchValue(this.customer);
    });
  }

  private getTypeCustomer() {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypes = value;
    });
    console.log(this.customerTypes);
  }

  onSubmit() {
    const customer = this.customerFormEdit.value;
    customer.id = this.customer.id;
    this.customerService.updateCustomer(this.customer.id, this.customerFormEdit.value).subscribe(() => {
      alert('update thanh cong');
      this.router.navigateByUrl('/customer');
      this.customerFormEdit.reset();
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
