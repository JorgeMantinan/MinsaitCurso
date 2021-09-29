import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() logo: string = 'AA';
  @Input() nombre: string = 'Paco';
  @Input() descripcion: string = 'Mi gato se llama guantes';
  constructor() { }

  ngOnInit(): void {
  }

}
