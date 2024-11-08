import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.css'],
})
export class BinaryComponent implements OnInit {
  binaryTime: number[][] = [];
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateBinaryTime();
      this.intervalId = setInterval(() => {
        this.updateBinaryTime();
      }, 1000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateBinaryTime() {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();

    this.binaryTime = [
      this.toBinaryArray(this.hours),
      this.toBinaryArray(this.minutes),
      this.toBinaryArray(this.seconds),
    ];
  }

  toBinaryArray(num: number): number[] {
    return num.toString(2).padStart(6, '0').split('').map(Number);
  }
}
