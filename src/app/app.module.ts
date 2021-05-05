import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { AcordionComponent } from './Acordion/acordion/acordion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatosComponent } from './component/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    AcordionComponent,
    DatosComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
