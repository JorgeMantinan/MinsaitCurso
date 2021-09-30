import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {

  @Input('appMarcar') color: string = 'green'

  @HostBinding('style.backgroundColor') colorFondo = 'white' //recibe lo que queramos cambiar

  constructor(private elementRef: ElementRef) {
    //elementRef.nativeElement.style.backgroundColor = 'green';

  }

  ngOnInit() {
    console.log({color: this.color});
    // this.color = this.color === '' ? 'blue' : this.color;
    //Es lo mismo
    this.color = this.color || 'blue';
  }

  @HostListener('mouseover') onMouseOver() { //Cuando haga este evento haz esto
    this.colorFondo = this.color;
  }
  @HostListener('mouseleave') onMouseLeave() { //Cuando haga este evento haz esto
    this.colorFondo = 'white';
  }


}
