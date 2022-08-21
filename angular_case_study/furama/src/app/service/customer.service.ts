import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:3000/customerList';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  addCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + '/' + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(this.API_URL + '/' + id, customer);
  }

  deleteCustomer(id: number ): Observable<Customer> {
    return this.http.delete<Customer>(this.API_URL + '/' + id);
  }
  search(search: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + '?name_like=' + search);
  }
}
