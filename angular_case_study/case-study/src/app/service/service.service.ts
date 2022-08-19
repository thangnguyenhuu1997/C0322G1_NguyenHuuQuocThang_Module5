import { Injectable } from '@angular/core';
import {Service} from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  services: Service [] = [{
    id: 'SV-001',
    name: 'Villa',
    maxPeople: 5,
    areaUse: 30,
    view: 'hướng biển'
  },
    {
      id: 'SV-002',
      name: 'Villa',
      maxPeople: 5,
      areaUse: 30,
      view: 'hướng vườn'
    },
    {
      id: 'SV-003',
      name: 'Villa',
      maxPeople: 5,
      areaUse: 30,
      view: 'hướng nghĩa địa'
    },
    {
      id: 'SV-004',
      name: 'Villa',
      maxPeople: 5,
      areaUse: 30,
      view: 'hướng về đảng'
    },
    {
      id: 'SV-005',
      name: 'Villa',
      maxPeople: 5,
      areaUse: 30,
      view: 'hướng về em'
    },
    {
      id: 'SV-006',
      name: 'Villa',
      maxPeople: 5,
      areaUse: 30,
      view: 'hướng dương'
    },
    {
      id: 'SV-007',
      name: 'Villa',
      maxPeople: 5,
      areaUse: 30,
      view: 'hướng mặt trời'
    },
  ];
  constructor() { }

  getAll() {
    return this.services;
  }
}
