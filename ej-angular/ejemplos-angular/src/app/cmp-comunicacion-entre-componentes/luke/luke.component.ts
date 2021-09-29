import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.css']
})
export class LukeComponent implements OnInit {

  @Input() nombre: string = '';
  @Input() handleChangeNombre: any;
  constructor() { }

  ngOnInit(): void {
  }

  handleChangeNombreLuke(txt: string): any {
    console.log('handleChangeNombreLuke ' + txt);
    return () => this.handleChangeNombre(txt);
  }

}
