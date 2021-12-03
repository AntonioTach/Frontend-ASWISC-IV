import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceRevisarPacienteService {

  constructor(private http : HttpClient) { }

  public Pacientes(id_usuario?: string | null){
    return this.http.get<any>('http://localhost:4000/ver-pacientes/' + id_usuario);
  }
}
