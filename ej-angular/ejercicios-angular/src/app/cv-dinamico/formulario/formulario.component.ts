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

  usuario = {
    nombre: '',
    apellidos: '',
    email: ''
  }
  ocultarDatos: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  actualizarCV(nombre: string, apellidos: string, email: string): void {
    this.persona.nombreCV = nombre;
    this.persona.apellidosCV = apellidos;
    this.persona.emailCV = email;
  }

  enviarDatos(nombre: string, apellidos: string, email: string): void {
    this.usuario.nombre = nombre.trim();
    this.usuario.apellidos = apellidos.trim();
    this.usuario.email = email.trim();

    const props: Array<string> = Object.values(this.usuario);
    this.ocultarDatos = props.every((val: string) => val === '');
  }

}
