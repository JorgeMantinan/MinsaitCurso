import { Pipe, PipeTransform } from '@angular/core';
import { Vendehumo } from './vendehumo';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(vendehumos: Array<Vendehumo>, sortValue: string): Array<Vendehumo>[] {
    let newVendehumos: Array<Vendehumo>;

    //Sort vendehumos, sortValue da el valor del boton para ordenar por ello
    //Guardarlo en la variable newVendehumos y retornarla

    return newVendehumos;
  }

}
