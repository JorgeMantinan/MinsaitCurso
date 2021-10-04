import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.crearObservable();
  }

  crearObservable() {
    const miObservable = new Observable((observer: Observer<string>) => {
      observer.next('Te acabas de suscribir');
      for(let i = 0;i < 5; i++){
        setTimeout(() => {
          observer.next('El mensaje '+i)
        },1000+i)
      }
      setTimeout(() => {
        observer.complete();
      },7000)
      setTimeout(() => {
        observer.error('Ha ocurrido un error')
      },7000)
      setTimeout(() => {
        observer.next('Este mensaje no se muestra si hay error')
      },8000)
    });
    miObservable.subscribe(
      (msg: string) => {
        console.log(msg);
      }, //next
      (err) => {
        console.log(err);
      }, //error
      () => {
        console.log('El observable se ha terminado');
      } //complete
    );
  }

}
