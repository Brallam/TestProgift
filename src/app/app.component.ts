import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import {ClimaService}from "./servicios/clima.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements OnInit {
   tiempo: string ;
   clima;
constructor( private ClimaService: ClimaService){}
    ngOnInit(){
      
    }
    ObtenerClima(ciudad:string){
      this.ClimaService.obtenerCiudad(ciudad)
      .subscribe(
        res=>{ this.clima= res;},
        err=>console.log(err)
      )
    }
    
    ServicioCiudad(ciudad){
      this.ObtenerClima(ciudad.value)
      console.log(ciudad.value)
      ciudad.value=""
      ciudad.focus()
      return false;
      }
    ServicioTemperatura(temp){
      this.tiempo=temp.value
    }

    title = 'progiftnet';
}
