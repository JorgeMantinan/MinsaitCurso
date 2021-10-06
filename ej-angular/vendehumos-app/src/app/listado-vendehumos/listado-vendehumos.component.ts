import { Component, OnInit } from '@angular/core';
import { Vendehumo } from '../vendehumo';
import { VendehumosServiceService } from '../vendehumos-service.service';

@Component({
  selector: 'app-listado-vendehumos',
  templateUrl: './listado-vendehumos.component.html',
  styleUrls: ['./listado-vendehumos.component.css']
})
export class ListadoVendehumosComponent implements OnInit {

  vendehumos: any = [];
  usuarios: any = [];

  keySort: string = 'id';
  reverse: boolean = false;

  constructor(private vendehumosService: VendehumosServiceService) { }

  ngOnInit(): void {
    this.vendehumosService.getVendehumos().subscribe((vendehumos: any) => {
      this.vendehumos = vendehumos;
    });
    this.vendehumosService.getUsuarios().subscribe((usuarios: any) => {
      this.usuarios = usuarios;
    });
  }


}
