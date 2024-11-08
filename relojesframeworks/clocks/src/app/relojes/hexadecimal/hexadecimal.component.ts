import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hexadecimal',
  templateUrl: './hexadecimal.component.html',
  styleUrls: ['./hexadecimal.component.css']
})
export class HexadecimalComponent implements OnInit {
  time: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString(16).padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        this.time = `${hours}:${minutes}:${seconds}`;
      }, 1000);
    }
  }
}
