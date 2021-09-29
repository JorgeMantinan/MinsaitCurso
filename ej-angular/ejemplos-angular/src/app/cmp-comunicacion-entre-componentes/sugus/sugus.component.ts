import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent implements OnInit {

  @Input() sabor: string = 'Limón'; //Asi se puede recibir valores desde el exterior
  @Input() color: string = 'yellow';
  constructor() { }

  ngOnInit(): void {
  }

}
