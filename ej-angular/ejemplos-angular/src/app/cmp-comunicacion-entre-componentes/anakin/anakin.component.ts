import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anakin',
  templateUrl: './anakin.component.html',
  styleUrls: ['./anakin.component.css']
})
export class AnakinComponent implements OnInit {

  nombreLuke: string = 'Luke Skywalker'
  nombreLeia: string = 'Leia Morgana'
  constructor() { 
    this.cambiaNombreLuke = this.cambiaNombreLuke.bind(this);
  }

  ngOnInit(): void {
  }

  cambiaNombreLeia(nuevoNombre: any):void {
    this.nombreLeia = nuevoNombre;
  }
  cambiaNombreLuke(nuevoNombre: any):void {
    console.log('cambiaNombreLuke ' + nuevoNombre);
    this.nombreLuke = nuevoNombre;
  }

}
