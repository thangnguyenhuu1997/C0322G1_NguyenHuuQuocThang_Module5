import { Injectable } from '@angular/core';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts: Contract [] = [{
    id: 'CT-001',
    startDate: '2002-12-04',
    endDate: '2002-12-05',
    deposit: 10000,
    totalPayment: 20000,
  },
    {
      id: 'CT-001',
      startDate: '2002-12-04',
      endDate: '2002-12-05',
      deposit: 10000,
      totalPayment: 20000,
    },
    {
      id: 'CT-001',
      startDate: '2002-12-04',
      endDate: '2002-12-05',
      deposit: 10000,
      totalPayment: 20000,
    },
    {
      id: 'CT-001',
      startDate: '2002-12-04',
      endDate: '2002-12-05',
      deposit: 10000,
      totalPayment: 20000,
    },
  ];
  constructor() {
  }

  getAll() {
    return this.contracts;
  }
}
