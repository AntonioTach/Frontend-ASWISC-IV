import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpedientePacientesService {

  constructor(private http: HttpClient) { }

  getPaciente(id: string) {
    return this.http.get('http://localhost:4000/buscar-paciente/' + id);
  }
}
