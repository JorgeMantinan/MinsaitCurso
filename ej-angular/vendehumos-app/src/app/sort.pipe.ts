import { Pipe, PipeTransform } from '@angular/core';
import { Vendehumo } from './vendehumo';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(vendehumos: Array<Vendehumo>, sortValue: string): Array<Vendehumo> {
    let newVendehumos: Array<Vendehumo> = [];

    if (sortValue === 'btnSortVotos') {
      console.log('Votos: ' + sortValue);
      console.log('Votos: ' + vendehumos);

    } else if (sortValue === 'btnSortFecha') {
      console.log('Fecha: ' + sortValue);
      console.log('Fecha: ' + vendehumos);
    }
    //Sort vendehumos, sortValue da el valor del boton para ordenar por ello
    //Guardarlo en la variable newVendehumos y retornarla

    return newVendehumos;
  }

}
