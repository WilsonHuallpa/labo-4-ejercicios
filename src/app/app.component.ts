import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  edadUno: number = 0; 
  edadDos: number = 0;
  promedio: number | null = null; 
  suma: number | null = null;

  calcular() {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }

  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = null;
    this.suma = null;
  }
}
