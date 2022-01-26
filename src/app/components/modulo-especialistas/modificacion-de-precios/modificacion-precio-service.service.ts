import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ModificacionPrecioServiceService {

  constructor(private http: HttpClient) { }

  getPrecioGeneral(id: string) {
    return this.http.get('http://localhost:4000/' + 'buscar-EspecialistaAll/' + id)
  }

  paciente(informacion: any) {
    return this.http.put('http://localhost:4000/precio-paciente/' + informacion.id_paciente.toString(), informacion);
  }
  capturar(informacion: any) {
    const id = localStorage.getItem('id_especialista')
    return this.http.put('http://localhost:4000/precio-consulta-general/' + id, informacion);
  }

}
