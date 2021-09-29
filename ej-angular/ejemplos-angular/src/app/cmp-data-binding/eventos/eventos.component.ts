import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarEnlace(event: any) {
    //Para evitar que se refresque la pagina
    event.preventDefault();
    console.log(event.target.href);
  }

  //Stop propagation
  muestraLaCajaPulsada(caja: string, event: any) {
    event.stopPropagation(); //Para que no pulse todos los divs que contiene otro div
    alert(`Has pulsado sobre la ${caja}`);
  }

}
