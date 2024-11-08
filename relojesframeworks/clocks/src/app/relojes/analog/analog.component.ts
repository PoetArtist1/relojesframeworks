import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-analog',
  templateUrl: './analog.component.html',
  styleUrls: ['./analog.component.css']
})
export class AnalogComponent implements OnInit {
  hourHand = '';
  minuteHand = '';
  secondHand = '';
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: any;

  // Coordenadas y valores de los números de las horas
  hourNumbers: { value: number, style: any }[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.generateHourNumbers();
      this.updateClock();
      this.intervalId = setInterval(() => {
        this.updateClock();
      }, 1000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Genera los números de las horas con sus posiciones
  generateHourNumbers() {
    const radius = 80; // Radio para posicionar los números (ajústalo según sea necesario)
    const centerX = 100; // Centro X del reloj
    const centerY = 100; // Centro Y del reloj

    for (let i = 1; i <= 12; i++) {
      const angle = (i * 30) * (Math.PI / 180); // Convierte grados a radianes
      const x = centerX + radius * Math.sin(angle);
      const y = centerY - radius * Math.cos(angle);

      this.hourNumbers.push({
        value: i,
        style: { left: `${x}px`, top: `${y}px` }
      });
    }
  }

  updateClock() {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();

    // Calculando el ángulo de cada manecilla
    this.hourHand = `rotate(${this.hours * 30 + this.minutes * 0.5}deg)`; // 30 grados por cada hora y 0.5 grados por cada minuto
    this.minuteHand = `rotate(${this.minutes * 6}deg)`; // 6 grados por cada minuto
    this.secondHand = `rotate(${this.seconds * 6}deg)`; // 6 grados por cada segundo
  }
}
