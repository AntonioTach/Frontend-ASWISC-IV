import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {usuarioPaciente} from 'src/app/models/usuarioPaciente';

@Injectable({
    providedIn: 'root'
})

export class ServiceRegistroPacienteService {

    URL_API = 'http://localhost:4000/api/pacientes/registro'; //Puerto del server NODE
  
    selectedEspecialista: usuarioPaciente = {
        nombre: '',
        email: '',
        sexo: '',
        estudios: '',
        usuario: '',
        contrasena: '',
        telefono:0,
        nombretutor: '',
        telefonotutor:0,
    
    };
  
    especialistas: usuarioPaciente[] = []; //arreglo de Pacientes
  
  
  
    constructor(private http : HttpClient) {}
  
  
  
    createPaciente(paciente: usuarioPaciente){
      //envio del objeto especialista al server
      return this.http.post<usuarioPaciente[]>(this.URL_API, paciente);
  
      //return this.http.post(this.URL_API, especialista);
    }
  
    // getEspecialistas(){ //prueba
    //   return this.http.get(this.URL_API);
  
    // }
  
  
  }