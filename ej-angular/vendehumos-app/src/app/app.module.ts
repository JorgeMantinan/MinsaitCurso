import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoVendehumosComponent } from './listado-vendehumos/listado-vendehumos.component';
import { CardVendehumosComponent } from './card-vendehumos/card-vendehumos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoVendehumosComponent,
    CardVendehumosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
