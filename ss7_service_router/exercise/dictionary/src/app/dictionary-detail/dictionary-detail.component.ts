import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../model/dictionary';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Dictionary;
  constructor(private dictionaryService: DictionaryService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    console.log(id);
    this.dictionary = this.dictionaryService.findById(id);
  }
  DetailInfoDictionary(): void {
    this.router.navigateByUrl('');
  }
}
