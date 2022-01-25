import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceNombrePacienteService {

constructor(private http: HttpClient) { }

  getPaciente(id_usuario?: string | null){

    return this.http.get('http://localhost:4000/buscar-PacienteNombre/' + id_usuario);
  }

  updatePaciente(id: string | null, objeto: any): Observable<any> {
    console.log(id, objeto);
    return this.http.post('http://localhost:4000/' + 'editar-Paciente/' + id, objeto);
  }
}
