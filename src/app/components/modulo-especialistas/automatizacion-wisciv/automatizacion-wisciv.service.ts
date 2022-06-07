import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutomatizacionWiscivService {

constructor(private http: HttpClient) { }
  @Output() disparadorDatos: EventEmitter<any> = new EventEmitter();
  envioDatos(datos: any){
    return this.http.post('http://localhost:4000/aswisc/aswisc/', datos);
  }

  getDatos(id_ASWISC: string){
    return this.http.get(`http://localhost:4000/aswisc/obtenerWISC/${id_ASWISC}`)
  }




}
