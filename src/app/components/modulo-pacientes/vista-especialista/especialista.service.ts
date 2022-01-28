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
  getPaciente(id: any) {
    return this.http.get('http://localhost:4000/buscar-paciente/' + id);

  }
  unsubscribePaciente(idPaciente: any) {
    console.log(idPaciente);
    return this.http.get('http://localhost:4000/' + 'desuscribirme/' + idPaciente);
  }
  getEspecialista2(id: string) {
    return this.http.get('http://localhost:4000/buscar-Especialista2/' + id);
  }
}
