
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioPaciente } from 'src/app/models/usuarioPaciente';

@Injectable({
  providedIn: 'root'
})
export class ModificacionExpedienteServiceService {




  URL_API = 'http://localhost:4000/registrar-paciente/'; //Puerto del server NODE

  selectedPaciente: usuarioPaciente = {
    id_usuario: 0,
    nombre: '',
    usuario: '',
    email: '',
    sexo: '',
    estudios: '',
    telefono: 0,
    nombretutor: '',
    telefonotutor: 0,
    contrasena: '',
  };

  pacientes: usuarioPaciente[] = []; //arreglo de Pacientes


  constructor(private http: HttpClient) { }

  registrarPaciente(paciente: usuarioPaciente) {
    return this.http.post<usuarioPaciente[]>(this.URL_API, paciente);
  }
  getPaciente(id: string) {
    return this.http.get('http://localhost:4000/' + 'buscar-paciente/' + id)
  }
  updatePaciente(id: string, objeto: any) {
    console.log(id, objeto);
    return this.http.post('http://localhost:4000/' + 'editar-Paciente/' + id, objeto);
  }
}
