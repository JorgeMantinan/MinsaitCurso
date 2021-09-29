import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

  // transform(value: string, ...texto: string[]): string {
  //   var nuevoTexto: string = value
  //   for (var i = 0; i < texto.length; i++) {
  //     let palabra = texto[i]
  //     nuevoTexto = nuevoTexto.replace(new RegExp(palabra, 'gi'), '*'.repeat(texto[i].length))
  //   }
  //   return nuevoTexto;
  // }

  transform(value: string, palabras: string[]): string {
    palabras.forEach(palabra => {
      const regExp = new RegExp(palabra,'gi');
      value = value.replace(regExp, '*'.repeat(palabra.length));
    });
    return value;
  }

}

//{{'hola mundo' | hidewords:['puto','cruel']}} => => **** mundo