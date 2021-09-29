import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-comunicacion-entre-componentes',
  templateUrl: './cmp-comunicacion-entre-componentes.component.html',
  styleUrls: ['./cmp-comunicacion-entre-componentes.component.css']
})
export class CmpComunicacionEntreComponentesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  fnAlert() {
    alert('My alert');
  }

  fnConsoleLog() {
    console.log('My console log');
  }
}
