import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-stair-clock',
  templateUrl: './stair-clock.component.html',
  styleUrls: ['./stair-clock.component.css'],
})
export class StairClockComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  hoursSteps: number[] = Array(24).fill(0); // Escalones para 24 horas
  minutesSteps: number[] = Array(60).fill(0); // Escalones para 60 minutos
  secondsSteps: number[] = Array(60).fill(0); // Escalones para 60 segundos

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateClock();
      setInterval(() => this.updateClock(), 1000); // Actualiza cada segundo
    }
  }

  updateClock() {
    const now = new Date();
    this.hours = now.getHours() % 24; // Formato 24 horas
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  }
}
