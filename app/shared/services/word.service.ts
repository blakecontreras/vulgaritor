import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Word } from '../models/word'
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WordService {
  wordsUrl = 'http://localhost:8000/words';

  constructor(private http: Http) {}

  getWords() {
    return this.http.get(this.wordsUrl)
      .map(data => data.json());
  }
}
