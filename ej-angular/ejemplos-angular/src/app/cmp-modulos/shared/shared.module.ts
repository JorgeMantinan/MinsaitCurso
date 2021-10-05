import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { OcultarTarjetaCreditoPipe } from './ocultar-tarjeta-credito.pipe';



@NgModule({
  declarations: [
    TarjetaCreditoComponent,
    OcultarTarjetaCreditoPipe
  ],
  exports: [
    TarjetaCreditoComponent // Esto es para utilizarlo a nivel global del app.module
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
