import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavbarPacienteService {

  constructor(private http: HttpClient) { }

  watchPacienteEspecialista(){
    let idPaciente = localStorage.getItem("id_usuario")
    return this.http.get('http://localhost:4000/watch-paciente-especialista/' + idPaciente);
    
  }

}
