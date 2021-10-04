import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { EventosService } from '../eventos.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-s-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css'],
  providers: [DatosService] //Se haría una nueva instancia del servicio
  // Para que diferencia entre el de Leia y el de Luke
})
export class LeiaComponent implements OnInit {

  tareas: Array<Tarea> = [];

  constructor(private eventosService: EventosService,
    private datosService: DatosService) { }

  ngOnInit(): void {
    this.tareas = this.datosService.getTareas();
  }

  darLaNoticia() {
    this.eventosService.darNoticia.emit('Luke, yo soy tu hermana');
  }

  guardarTarea(event: any){
    this.datosService.addTarea(event.target.value, 'Leia')
  }

}
