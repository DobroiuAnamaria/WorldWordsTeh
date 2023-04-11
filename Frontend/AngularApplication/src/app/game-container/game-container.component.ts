import { Component, OnInit, ViewChild } from '@angular/core';
import { GameSummaryComponent } from './game-summary/game-summary.component';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit{
  @ViewChild(GameSummaryComponent, {static: false}) gameSummary: GameSummaryComponent | undefined;
  game = true;
  summary = false;

  ngOnInit(): void {
  }

  onGameOver(event: any) {
    this.game = false;
    this.summary = true;

    setTimeout(() => {
      this.gameSummary?.init(event);
    }, 1000);

  }

}
