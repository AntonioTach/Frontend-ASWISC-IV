import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {usuarioPaciente} from 'src/app/models/usuarioPaciente';

@Injectable({
    providedIn: 'root'
})

export class ServiceRegistroPacienteService {

    URL_API = 'http://localhost:4000/api/pacientes/registro'; //Puerto del server NODE

    selectedPaciente: usuarioPaciente = {
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



    constructor(private http : HttpClient) {}



    createPaciente(paciente: usuarioPaciente){
      //envio del objeto paciente al server
      return this.http.post<usuarioPaciente[]>(this.URL_API, paciente);


    }



  }
