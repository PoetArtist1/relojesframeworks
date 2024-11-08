import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  time: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        this.time = `${this.toWords(hours)} y ${this.toWords(minutes)} con ${this.toWords(seconds)} segundos`;
      }, 1000);
    }
  }

  toWords(num: number): string {
    const words = [
      "cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", 
      "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve", 
      "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", 
      "veintisiete", "veintiocho", "veintinueve", "treinta", "treinta y uno", "treinta y dos", 
      "treinta y tres", "treinta y cuatro", "treinta y cinco", "treinta y seis", "treinta y siete", 
      "treinta y ocho", "treinta y nueve", "cuarenta", "cuarenta y uno", "cuarenta y dos", 
      "cuarenta y tres", "cuarenta y cuatro", "cuarenta y cinco", "cuarenta y seis", "cuarenta y siete", 
      "cuarenta y ocho", "cuarenta y nueve", "cincuenta", "cincuenta y uno", "cincuenta y dos", 
      "cincuenta y tres", "cincuenta y cuatro", "cincuenta y cinco", "cincuenta y seis", 
      "cincuenta y siete", "cincuenta y ocho", "cincuenta y nueve"
    ];
    return words[num] || num.toString();
  }
}
