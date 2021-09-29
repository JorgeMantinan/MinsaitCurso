import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css']
})
export class LeiaComponent implements OnInit {

  @Input() nombre: string = ''
  @Output() nombreCambiado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  actualizarNombre(event: any): void{
    console.log(event.target.value);
    //creacion de evento para emitir un dato al padre (anaking.component.ts)
    //(Las cosas se tienen que actualizar en el padre para que se actualice en todos los hijos)
    this.nombreCambiado.emit(event.target.value);
  }
}
