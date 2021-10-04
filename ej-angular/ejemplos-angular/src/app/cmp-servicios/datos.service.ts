import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { v4 as uuidv4 } from 'uuid';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DatosService {

  tareas: Array<Tarea> = [
    new Tarea('Eliminar la estrella de la muerte 2', false, 'Leia', uuidv4()),
    new Tarea('Eliminar la estrella de la muerte 1', true, 'Leia', uuidv4())
  ];
  constructor() { }

  getTareas(): Array<Tarea> {
    return this.tareas;
  }

  addTarea(titulo: string, autor: string) {
    this.tareas.push(new Tarea(titulo, false, autor, uuidv4()));
  }

}
