import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Word } from './word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  @Output() gameover = new EventEmitter<any>();

  wordsGuessed = 0;
  word: Word | undefined;
  enteredText = "";

  matching = false;

  seconds = 60;

  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
    this.wordService.getRandom().subscribe({
      next: (data: any) => {
        this.word = new Word({word: data.wordName, description: data.wordDescription});
      }
    });
  }

  onTimeout() {
    this.gameover.emit({wordsGuessed: this.wordsGuessed});
  }

  checkText() {
    this.matching = this.enteredText.toLocaleLowerCase() == this.word?.word.toLocaleLowerCase();

    console.log(this.matching);
    
    if (this.matching) {
      this.wordsGuessed++;
      this.wordService.getRandom().subscribe({
        next: (data: any) => {
          this.word = new Word({word: data.wordName, description: data.wordDescription});
        }
      });
    }
  }
}
