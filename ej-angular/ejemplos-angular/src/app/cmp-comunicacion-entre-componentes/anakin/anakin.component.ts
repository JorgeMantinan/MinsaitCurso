import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anakin',
  templateUrl: './anakin.component.html',
  styleUrls: ['./anakin.component.css']
})
export class AnakinComponent implements OnInit {

  nombreLuke: string = 'Luke Skywalker'
  nombreLeia: string = 'Leia Morgana'
  constructor() { }

  ngOnInit(): void {
  }

  cambiaNombreLeia(nuevoNombre: any):void {
    this.nombreLeia = nuevoNombre;
  }

}
