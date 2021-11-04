import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {usuarioLogin} from 'src/app/models/usuarioLogin';

@Injectable({
    providedIn: 'root'
})

export class ServiceLoginUsuariosService {

    URL_API = 'http://localhost:4000/api/especialistas/login'; //Puerto del server

    selectedUsuario: usuarioLogin = {
        usuario:'',
        contrasena:'',
    };

    usuarios: usuarioLogin[] = []; //arreglo de Usuarios



    constructor(private http : HttpClient) {}



    loginUsuario(usuarios: usuarioLogin){
      //envio del objeto usuario al server
      return this.http.post<usuarioLogin[]>(this.URL_API, usuarios);


    }



  }
