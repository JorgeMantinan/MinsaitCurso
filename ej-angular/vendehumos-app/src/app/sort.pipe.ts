import { Pipe, PipeTransform } from '@angular/core';
import { Vendehumo } from './vendehumo';
import localeEs from '@angular/common/locales/es';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  transform(vendehumos: Array<Vendehumo>, sortValue: string): Array<Vendehumo> {
    let newVendehumos: Array<Vendehumo> = [];

    if (sortValue === 'btnSortVotos') {

      vendehumos.sort((vendehumoA, vendehumoB) => {
        return (vendehumoB.votos - vendehumoA.votos)
      })

    } else if (sortValue === 'btnSortFecha') {

      // let newDate: any = '';
      // let newDate1: any = '';

      // vendehumos.sort((vendehumoA, vendehumoB) => {
      //   // newDate = new Date(a.fechaCreacion);
      //   // newDate1 = new Date(b.fechaCreacion);
      //   // a.fechaCreacion = newDate.toString();
      //   // b.fechaCreacion = newDate1.toString();
      //   return (vendehumoB.fechaCreacion - vendehumoA.fechaCreacion)
      // })


    }
    newVendehumos = vendehumos;
    return newVendehumos;
  }

}
