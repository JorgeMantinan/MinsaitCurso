import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(texto: string): string {
    return texto.split('').reverse().join('')
  }

}