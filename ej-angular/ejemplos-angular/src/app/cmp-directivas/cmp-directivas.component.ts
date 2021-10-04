import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  colorLetra = 'orange';
  pintaElFondo = true;
  darkMode = true;

  // animales = ['perro','gato','canario','tortuga'];
  animales2 = [{ id: 1, tipo: 'perro' },
  { id: 2, tipo: 'gato' },
  { id: 3, tipo: 'canario' },
  { id: 4, tipo: 'tortuga' }
  ];

  animales3 = [{ id: 1, tipo: 'perro' },
  { id: 2, tipo: 'gato' }
  ];

  colores = ['orange', 'blue', 'red'];
  filtraColor = '';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animales3 = [
        { id: 1, tipo: 'canario' },
        { id: 2, tipo: 'gato' }]
    }, 10000);
  }

  addColor(event: any) {
    //this.colores.push(event.target.value);
    //para evitar el pure:false del pipe
    //clonamos la lista añadiendole el nuevo color
    this.colores = [... this.colores, event.target.value];
  }

  toogleFondo() {
    this.pintaElFondo = !this.pintaElFondo;
  }

  activaDarkMode() {
    this.darkMode = true;
  }
  activaLightMode() {
    this.darkMode = false;
  }

  getStyles() {
    return {
      textDecoration: 'underline',
      color: this.colorLetra
    }
  }
  getClases() {
    return {
      letraRoja: true,
      fondoAmarillo: this.pintaElFondo
    }
  }

  trackByAnimales(index: number, animal: string) {
    console.log(index);
    return index;
  }

  trackByAnimales2(index: number, animal: any) {
    console.log(animal.id);
    return animal.id;
  }

  trackById(index: number, animal: any): number {
    return animal.id;
  }

}
