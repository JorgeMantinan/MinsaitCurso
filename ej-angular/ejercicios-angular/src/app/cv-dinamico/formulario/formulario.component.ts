import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  persona = {
    nombreCV: '',
    apellidosCV: '',
    emailCV: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  actualizarCV(nombre: string, apellidos: string, email: string): void {
    this.persona.nombreCV = nombre;
    this.persona.apellidosCV = apellidos;
    this.persona.emailCV = email;
  }

}
