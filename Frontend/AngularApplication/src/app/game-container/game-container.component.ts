import { Component, OnInit, ViewChild } from '@angular/core';
import { GameSummaryComponent } from './game-summary/game-summary.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit{
  @ViewChild(GameSummaryComponent, {static: false}) gameSummary: GameSummaryComponent | undefined;
  game = true;
  summary = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  onGameOver(event: any) {
    this.game = false;
    this.summary = true;

    this.userService.getUsers().subscribe({
      next: (data) => {

        data[0].points += event.wordsGuessed;
        console.log(data[0]);
        
        this.userService.updatePoints(data[0].id, data[0].points).subscribe({
          next: (data) => {
            console.log(data);
          }
        });
      }
    })

    setTimeout(() => {
      this.gameSummary?.init(event);
    }, 1000);

  }

}
