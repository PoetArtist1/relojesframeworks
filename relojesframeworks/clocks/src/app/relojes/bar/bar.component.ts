import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000); // Actualiza cada segundo
  }

  updateTime() {
    const now = new Date();
    this.hour = now.getHours();
    this.minute = now.getMinutes();
    this.second = now.getSeconds();
  }

  // Métodos para calcular el ancho de las barras en porcentaje
  getHourPercentage(): string {
    return `${(this.hour / 24) * 100}%`;
  }

  getMinutePercentage(): string {
    return `${(this.minute / 60) * 100}%`;
  }

  getSecondPercentage(): string {
    return `${(this.second / 60) * 100}%`;
  }
}
