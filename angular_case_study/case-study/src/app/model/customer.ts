import {CustomerType} from './customer-type';

export interface Customer {
  id: number;
  code: string;
  typeCustomer: CustomerType;
  name: string;
  gender: string;
  birthday: string;
  idCard: number;
  phone: number;
  email: string;
  address: string;
}
