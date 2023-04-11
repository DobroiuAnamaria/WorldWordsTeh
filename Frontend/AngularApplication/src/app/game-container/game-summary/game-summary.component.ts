import { Component } from '@angular/core';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.css']
})
export class GameSummaryComponent {
  data: any = {wordsGuessed: 0};

  init(event: any) {
    console.log(event);
    this.data = event;
    console.log(this.data);
  }

}
