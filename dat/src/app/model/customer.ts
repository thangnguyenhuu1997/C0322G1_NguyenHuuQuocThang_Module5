import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  name?: string;
  birthDay?: string;
  gender?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
  type?: CustomerType;
}
