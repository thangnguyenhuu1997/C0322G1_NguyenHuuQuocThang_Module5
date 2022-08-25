import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StandardRoom} from '../model/standard-room';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class StandardRoomService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<StandardRoom[]> {
    return this.http.get<StandardRoom[]>(API_URL + '/standardRooms');
  }
}
