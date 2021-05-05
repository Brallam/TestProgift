import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  
   URI :string="";
  constructor(private http: HttpClient) { 
    this.URI="https://www.metaweather.com/api/location/"
  }
  

  obtenerTemperatura(temperatura){
   return this.http.get(this.URI+temperatura)
  }
  
}
