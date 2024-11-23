import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-circle-clock',
  templateUrl: './circleclock.component.html',
  styleUrls: ['./circleclock.component.css']
})
export class CircleClockComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  // Progreso dinámico
  hourProgress: number = 0;
  minuteProgress: number = 0;
  secondProgress: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateClock();
      setInterval(() => this.updateClock(), 1000);
    }
  }

  updateClock() {
    const now = new Date();
    this.hours = now.getHours() % 12; // Formato 12 horas
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();

    // Calculando progreso
    this.hourProgress = (this.hours + this.minutes / 60) / 12 * 283; // Proporcional a 12 horas
    this.minuteProgress = (this.minutes + this.seconds / 60) / 60 * 283; // Proporcional a 60 minutos
    this.secondProgress = this.seconds / 60 * 283; // Proporcional a 60 segundos

    // Actualizando estilos de los círculos
    this.setCircleProgress();
  }

  setCircleProgress() {
    const hourCircle = document.querySelector('.hour-circle') as SVGCircleElement;
    const minuteCircle = document.querySelector('.minute-circle') as SVGCircleElement;
    const secondCircle = document.querySelector('.second-circle') as SVGCircleElement;

    if (hourCircle) hourCircle.style.strokeDashoffset = (283 - this.hourProgress).toString();
    if (minuteCircle) minuteCircle.style.strokeDashoffset = (283 - this.minuteProgress).toString();
    if (secondCircle) secondCircle.style.strokeDashoffset = (283 - this.secondProgress).toString();
  }
}
