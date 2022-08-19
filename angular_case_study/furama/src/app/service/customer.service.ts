import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];
  private URL_CUSTOMER = 'http://localhost:3000/customer';

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER);
  }


  getAllCustomerByName(name: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER + '?name_like=' + name);
  }

  saveCustomer(customer: Customer) {
    return this.httpClient.post<Customer>(this.URL_CUSTOMER, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.URL_CUSTOMER + '/' + id);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URL_CUSTOMER + '/' + id);
  }

  editCustomer(id: number, customer: Customer) {
    return this.httpClient.patch(this.URL_CUSTOMER + '/' + id, customer);
  }
}
