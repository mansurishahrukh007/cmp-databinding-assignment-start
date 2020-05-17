import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('gameStarted') counter: EventEmitter<number> = new EventEmitter();
  @Output('gameStopped') gameStopped: EventEmitter<boolean> = new EventEmitter();

  counterNumber = 1;
  interval;
  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    console.log('[onGameStart clicked]');
    this.interval = setInterval(() => {
      this.counter.emit(this.counterNumber++);
    }, 1000);
  }

  onGameStop() {
    console.log('[onGameStop clicked]');
    clearInterval(this.interval);
    this.counterNumber = 1;
    this.gameStopped.emit(true);
  }
}
