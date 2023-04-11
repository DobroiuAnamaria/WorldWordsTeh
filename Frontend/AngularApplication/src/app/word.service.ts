import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'
import { Word } from './game/word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  static readonly WORD_BASE_PATH = 'https://localhost:7026/Words';

  constructor(private http: HttpClient, private httpHandler: HttpHandler) { }

  getRandom() {
    return this.http.get<Word>(`${WordService.WORD_BASE_PATH}/random`);
  }
}
