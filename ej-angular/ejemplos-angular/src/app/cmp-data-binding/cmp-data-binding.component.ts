import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

  nombre: string = 'Falco';
  nombrePrueba: string = 'aaaa';
  deshabilitado: boolean = true;
  blue: string = 'blue';
  persona = {
    nombre: 'Robb',
    apellido: 'Stark'
  }
  constructor() { }

  ngOnInit(): void {
  }

  getSaludo(nombre: string): string {
    return `Bienvenido ${nombre}`;
  }

  muestraMensaje(msg: string, event: any): void {
    alert(msg);
    console.log(event.target);
    const element: HTMLElement = event.target;
    element.innerText = 'Otra movida';
    //(event.target as HTMLButtonElement).innerText = 'Otra cosa';
  }

  //Nunca deberiamos hacer lo del any
  getIntroBatman(): string {
    const nan = (1-('mat' as any)) + '';
    //Tonteria de bugs de JavaScript
    return new Array(16).join(nan) + ' Batman';
  }

  canta(): void {
    const synth = window.speechSynthesis
    const utterance = new SpeechSynthesisUtterance(this.getIntroBatman());
    synth.speak(utterance);
  }

  resetearNombre(): void {
    this.nombre = '';
  }


  actualizarNombrePrueba(event: any): void {
    const element: any = event.target;
    this.nombrePrueba = element.value;
  }
}
