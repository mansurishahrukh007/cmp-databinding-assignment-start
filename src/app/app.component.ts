import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;

  gameStartedEvent(counter: number) {
    console.log('Counter: ', counter);
    this.counter = counter;
  }

  gameStoppedEvent(isGameStopped: boolean) {
    if (isGameStopped) {
      this.counter = undefined;
    }
  }
}
