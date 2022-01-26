import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ModificacionPrecioServiceService {

constructor(private http: HttpClient) { }

getPrecioGeneral(id: string){
  return this.http.get('http://localhost:4000/' + 'buscar-EspecialistaAll/' + id)
}

capturar(id: string, id_paciente: string){

}

}
