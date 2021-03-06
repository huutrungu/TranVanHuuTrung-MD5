import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/word';
import {DictionaryServiceService} from '../dictionary-service.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionary: IWord[] = [];

  constructor(private dictionaryService: DictionaryServiceService) {

  }

  ngOnInit(): void {
    this.dictionary = this.dictionaryService.findAllWord();
  }

}
