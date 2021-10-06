import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoVendehumosComponent } from './listado-vendehumos/listado-vendehumos.component';
import { CardVendehumosComponent } from './card-vendehumos/card-vendehumos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListadoVendehumosComponent,
    CardVendehumosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule//,
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
