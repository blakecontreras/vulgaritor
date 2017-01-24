import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Word } from '../models/word'
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WordService {
  private wordsUrl: string = 'http://localhost:8000/words';
  private addWordUrl: string = 'http://localhost:8000/addWord';

  constructor(private http: Http) {}

  getWords(): Observable<Array<Word>[]>{
    return this.http.get(this.wordsUrl)
      .map(data => data.json())
      .catch(this.handleError);  
  }

  addWords(words: Object): Observable<Word[]>{
    return this.http.post(this.addWordUrl, words)
      .map(data => data.json())
      .catch(this.handleError);
  }

  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }
    return Observable.throw(errMessage);
  }
}
