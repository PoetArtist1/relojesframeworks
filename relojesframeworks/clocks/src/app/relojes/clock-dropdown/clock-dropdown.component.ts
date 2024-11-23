import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clock-dropdown',
  templateUrl: './clock-dropdown.component.html',
  styleUrls: ['./clock-dropdown.component.css']
})
export class ClockDropdownComponent {
  clocks: string[] = ['Digital', 'Analógico', 'Binario', 'Hexadecimal', 'Texto', 'Barra', 'Circulo', 'Escalera'];
  
  @Output() clockSelected = new EventEmitter<string>();

  onClockSelect(event: Event) {
    const selectedClock = (event.target as HTMLSelectElement).value;
    this.clockSelected.emit(selectedClock);
  }
}
