import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements AfterViewInit, OnDestroy {

  counter: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  millis:  number = 0;
  timerRef;
  running: boolean = false;
  startText = 'Start';

  ngAfterViewInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.running = !this.running;
    if (this.running) {
      this.startText  = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef   = setInterval(() => {
        this.counter = Date.now() - startTime;
        this.seconds = Math.floor(this.counter / 1000);
        this.millis  = this.counter - (this.seconds * 1000);
        this.minutes = Math.floor(this.seconds / 60);
        this.seconds = this.seconds - (this.minutes * 60);
      }, 50);
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }

  clearTimer(): void {
    this.running   = false;
    this.startText = 'Start';
    this.counter   = undefined;
    clearInterval(this.timerRef);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerRef);
  }

}
