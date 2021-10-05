import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarTarjetaCredito'
})
export class OcultarTarjetaCreditoPipe implements PipeTransform {

  transform(value: string): string {
    const ultimosNumeros = value.slice(-4);
    return '**** **** **** ' + ultimosNumeros;
  }

}
