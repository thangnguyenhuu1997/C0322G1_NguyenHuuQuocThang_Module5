import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {FacilityService} from '../facility.service';
import {FacilityTypeService} from '../facility-type.service';
import {RentTypeService} from '../rent-type.service';
import {StandardRoomService} from '../standard-room.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityType} from '../../model/facility-type';
import {StandardRoom} from '../../model/standard-room';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private facilityService: FacilityService,
    private facilityTypeService: FacilityTypeService,
    private rentTypeService: RentTypeService,
    private standardRoomService: StandardRoomService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.findById(this.id);
    });
  }

  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];
  standardRooms: StandardRoom[] = [];
  facilityForm: FormGroup;
  id: number;

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

  findById(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern('^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$')]),
        area: new FormControl(facility.area, [Validators.required, Validators.pattern('^[1-9]+\\d*')]),
        cost: new FormControl(facility.cost, [Validators.required, Validators.pattern('^[1-9]+\\d*')]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required, Validators.pattern('^[1-9]+\\d*')]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom),
        otherDescription: new FormControl(facility.otherDescription),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.pattern('^[1-9]+\\d*')]),
        numberFloor: new FormControl(facility.numberFloor, [Validators.required, Validators.pattern('^[1-9]+\\d*')]),
        facilityFree: new FormControl(facility.facilityFree),
        image: new FormControl(facility.image)
      });
    });
  }

  update(id: number) {
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

    this.facilityService.update(id, facility).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/facility/list']);
    });
  }

  getType(type) {
    this.type = type;
  }
}
