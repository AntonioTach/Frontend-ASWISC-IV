import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceEliminarpacienteService {

constructor(private http : HttpClient) { }

public DeletePaciente(id_usuario?: string | null){
  return this.http.delete('http://localhost:4000/eliminar-Paciente/' + id_usuario);
}
}
