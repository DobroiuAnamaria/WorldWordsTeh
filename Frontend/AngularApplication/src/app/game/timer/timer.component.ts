import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  show = true;
  @Input() seconds: number = 3;

  @Output() timeout = new EventEmitter<any>();

  ngOnInit(): void {
    setInterval(() => {
      this.seconds--;
      if(this.seconds === 0) {
        this.timeout.emit();
      }
    }, 1000);
  }
}
