import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../customer.service';
import {CustomerTypeService} from '../customer-type.service';
import {Router} from '@angular/router';
import {checkBirthDay} from '../../validate/check-birth-day';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  customerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+(\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$')]),
    birthDay: new FormControl('', [Validators.required, checkBirthDay]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('\\d{9}')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(0|\\(\\+84\\))\\d{9}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  customerTypes: CustomerType[] = [];

  validationMessage = {
    name: [
      {type: 'required', message: '*Vui lòng nhập tên'},
      {type: 'pattern', message: '*Vui lòng nhập tên đúng'}
    ],
    birthDay: [
      {type: 'required', message: '*Vui lòng nhập ngày sinh'},
    ],
    gender: [
      {type: 'required', message: '*Vui lòng chọn giới tính'},
    ],
    idCard: [
      {type: 'required', message: '*Vui lòng nhập số CMND'},
      {type: 'pattern', message: '*Vui lòng nhập số CMND gồm 9 số từ 0 đến 9'}
    ],
    phone: [
      {type: 'required', message: '*Vui lòng nhập số điện thoại'},
      {type: 'pattern', message: '*Vui lòng nhập số điện thoại đúng định dạng 0xxxxxxxxx or (+84)xxxxxxxx'}
    ],
    address: [
      {type: 'required', message: '*Vui lòng nhập địa chỉ'}
    ],
    email: [
      {type: 'required', message: '*Vui lòng nhập email'},
      {type: 'email', message: '*Vui lòng nhập email đúng định dạng email@email.email'}
    ],
    type: [
      {type: 'required', message: 'Vui lòng nhập loại khách hàng'}
    ],
  };

  ngOnInit(): void {
    this.getCustomerType();
  }

  submit() {
    const customer = this.customerForm.value;

    customer.type = {
      name: customer.type
    };

    this.customerService.save(customer).subscribe(() => {
      alert('Tạo mới thành công');
      this.customerForm.reset();
      this.router.navigate(['/customer/list']);
    }, e => console.log(e));
  }


  getCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }
}
