import { Component } from '@angular/core';

@Component({
  selector: 'app-clock-container',
  templateUrl: './clock-container.component.html',
  styleUrls: ['./clock-container.component.css']
})
export class ClockContainerComponent {
  selectedClock: string = 'Digital';

  onClockSelected(clock: string) {
    this.selectedClock = clock;
  }
}
