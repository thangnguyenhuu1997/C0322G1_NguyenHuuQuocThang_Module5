import { Component, OnInit } from '@angular/core';
import {Contract} from '../model/contract';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contract: Contract[] = [];
  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.contract  = this.contractService.getAll();
  }

}
