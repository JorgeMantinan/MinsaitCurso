import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPracticaDirectiva]'
})
export class PracticaDirectivaDirective {

  posicionPx = 0;
  colores = ['red','blue','yellow','cyan','black'];

  @HostBinding('style.transform') posicionX = 'translateX(' + this.posicionPx +'px)';

  @HostBinding('style.backgroundColor') color = this.colores[3];
  constructor() { }

  @HostListener('keyup') keyup() {
    this.posicionX = 'translateX(' + this.posicionPx+1 +'px)';
    this.posicionPx = this.posicionPx + 1;
    this.color = this.colores[Math.floor(Math.random()*this.colores.length)];
  }


}
