import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../facility/facility.service';
import {CustomerService} from '../../customer/customer.service';
import {ContractService} from '../contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private facilityService: FacilityService,
              private customerService: CustomerService,
              private contractService: ContractService,
              private router: Router) {
  }

  contractForm: FormGroup = new FormGroup({
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+\\d*')]),
  });

  customers: Customer[] = [];

  facilities: Facility[] = [];

  validationMessage = {
    customer: [
      {type: 'required', message: '*Vui lòng chọn khách hàng'},
    ],
    facility: [
      {type: 'required', message: '*Vui lòng chọn dịch vụ'},
    ],
    startDate: [
      {type: 'required', message: '*Vui lòng nhập ngày bắt đầu làm hợp đồng'},
    ],
    endDate: [
      {type: 'required', message: '*Vui lòng nhập ngày kết thúc hợp đồng'},
    ],
    deposit: [
      {type: 'required', message: '*Vui lòng nhập tiền đặt cọc'},
      {type: 'pattern', message: '*Vui lòng số > 0'},
    ],
  }

  ngOnInit(): void {
    this.getCustomer();
    this.getFacility();
  }

  getCustomer(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  getFacility(): void {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  submit(): void {
    const contract = this.contractForm.value;

    contract.customer = {
      name: contract.customer
    };

    contract.facility = {
      name: contract.facility
    };

    this.contractService.save(contract).subscribe(() => {
      alert('Tạo mới thành công');
      this.contractForm.reset();
      this.router.navigate(['/contract/list']);
    }, e => console.log(e));
  }

}
