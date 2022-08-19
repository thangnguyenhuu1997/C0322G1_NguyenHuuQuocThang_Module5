import {Customer} from './customer';
import {Faciliti} from './faciliti';

export interface Contract {
  id: number;
  customer: Customer;
  faciliti: Faciliti;
  startDate: string;
  endDate: string;
  deposit: number;
}
