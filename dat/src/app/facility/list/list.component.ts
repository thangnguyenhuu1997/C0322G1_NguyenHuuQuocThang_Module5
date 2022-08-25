import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../facility.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  facilities: Facility[] = [];

  page = 1;
  pageSize = 6;

  deleteId: number;
  deleteName: string;

  constructor(private facilityService: FacilityService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  openDelete(targetModal, facility: Facility) {
    this.deleteId = facility.id;
    this.deleteName = facility.name;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'md'
    });
  }

  onDelete() {
    this.facilityService.delete(this.deleteId).subscribe(() => {
      this.ngOnInit();
      this.modalService.dismissAll();
    }, e => console.log(e));
  }
}
