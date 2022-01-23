import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {

  constructor(private http: HttpClient) { }
  getEspecialista(id: string) {
    return this.http.get('http://localhost:4000/buscar-Especialista/' + id);
  }
  updatePaciente(idPaciente: any, informacion: any) {
    return this.http.put('http://localhost:4000/' + 'nuevo-cliente/' + idPaciente, informacion);
  }
}
