// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = false;
  selectedClock: string = 'Digital';

  onLogin(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  onClockSelected(clock: string) {
    this.selectedClock = clock;
  }
}
