import { Component, OnInit } from '@angular/core';
import {StandardRoom} from '../../model/standard-room';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StandardRoomService} from '../standard-room.service';
import {RentTypeService} from '../rent-type.service';
import {FacilityTypeService} from '../facility-type.service';
import { FacilityService } from '../facility.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private standardRoomService: StandardRoomService,
              private router: Router) {
  }

  facilityForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$')]),
    area: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+\\d*')]),
    cost: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+\\d*')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+\\d*')]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
    standardRoom: new FormControl(),
    otherDescription: new FormControl(),
    poolArea: new FormControl('', [Validators.pattern('^[1-9]+\\d*')]),
    numberFloor: new FormControl('', [Validators.pattern('^[1-9]+\\d*')]),
    facilityFree: new FormControl(),
    image: new FormControl('../../../../assets/images/')
  });

  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];
  standardRooms: StandardRoom[] = [];

  type = '';

  validationMessage = {
    name: [
      {type: 'required', message: '*Tên dịch vụ không được bỏ trống'},
      {type: 'pattern', message: '*Vui lòng nhập tên đúng (không được chứa số)'}
    ],
    area: [
      {type: 'required', message: '*Vui lòng nhập diện tích dịch vụ'},
      {type: 'pattern', message: '*Diện tích phải > 0'}
    ],
    cost: [
      {type: 'required', message: '*Vui lòng nhập giá thuê dịch vụ'},
      {type: 'pattern', message: '*Giá thuê phải > 0'}
    ],
    maxPeople: [
      {type: 'required', message: '*Vui lòng nhập số lượng người tối đa cho dịch vụ'},
      {type: 'pattern', message: '*Số lượng người tối đa phải > 0'}
    ],
    rentType: [
      {type: 'required', message: '*Vui lòng chọn kiểu thuê'}
    ],
    facilityType: [
      {type: 'required', message: '*Vui lòng chọn loại dịch vụ'}
    ],
    poolArea: [
      {type: 'pattern', message: '*Diện tích hồ bơi phải > 0'}
    ],
    numberFloor: [
      {type: 'pattern', message: '*Số tầng phải > 0'}
    ],
  };

  ngOnInit(): void {
    this.getRentType();
    this.getFacilityType();
    this.getStandardRoom();
  }

  getRentType() {
    this.rentTypeService.getAll().subscribe(rentTypes => {
      this.rentTypes = rentTypes;
    });
  }

  getFacilityType() {
    this.facilityTypeService.getAll().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
    });
  }

  getStandardRoom() {
    this.standardRoomService.getAll().subscribe(standardRooms => {
      this.standardRooms = standardRooms;
    });
  }

  submit() {
    const facility = this.facilityForm.value;

    facility.rentType = {
      name: facility.rentType
    };

    facility.facilityType = {
      name: facility.facilityType
    };

    facility.standardRoom = {
      name: facility.standardRoom
    };

    this.facilityService.save(facility).subscribe(() => {
      alert('Tạo mới thành công');
      this.facilityForm.reset();
      this.router.navigate(['/facility/list']);
    }, e => console.log(e));
  }

  getType(type) {
    this.type = type;
  }

}
