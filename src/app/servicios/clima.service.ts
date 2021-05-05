import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  
   URI :string="";
  constructor(private http: HttpClient) { 
    this.URI="https://www.metaweather.com/api/location/search/?query="
  }
  

  obtenerCiudad(ciudad:string){
   return this.http.get(this.URI+ciudad)
  }
  
}
