import { Component, Input, OnInit } from '@angular/core';

import{TemperaturaService}from "../../servicios/temperatura.service"
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  @Input()datoTemp ;
  show
  tempera 
  
  constructor( public TemperaturaService:TemperaturaService) { }
  ngOnInit(): void {
    
  }
  temperaturadato(temp){
    console.log(temp+"-----------")
    this.TemperaturaService.obtenerTemperatura(temp)
    .subscribe(
      res=>{this.tempera=res;
        this.tempera=this.tempera.consolidated_weather[0]
      console.log(this.tempera) }
    )}
  serviceDatos(datotemp) {
      this.temperaturadato(datotemp.value);
      this.show=true
    }
}

