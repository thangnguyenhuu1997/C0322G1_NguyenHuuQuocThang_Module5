import { Injectable } from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: Dictionary[] = [
    {id: 1, english: 'Hello', vietnamese: 'Xin chào'},
    {id: 2, english: 'Flower', vietnamese: 'Hoa'},
    {id: 3, english: 'Red', vietnamese: 'Màu đỏ'},
    {id: 4, english: 'Yellow', vietnamese: 'Màu vàng'},
    {id: 5, english: 'Cat', vietnamese: 'Con mèo'}
  ];

  constructor() {
  }

  getAll() {
    return this.dictionaryList;
  }

  findById(id: number) {
    return this.dictionaryList.find(product => product.id === id);
  }
}
