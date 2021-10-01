import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'//,
  //pure: false //cada vez que haya un cambio se ejecutará el pipe (muy ineficiente)
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, filtro: string): Array<string> {
    return value.filter(color => {
      return color.includes(filtro);
    });
  }

}
