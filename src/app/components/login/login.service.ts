import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {usuarioLogin} from 'src/app/models/usuarioLogin';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class ServiceLoginUsuariosService {

    URL_API = 'http://localhost:4000/login'; //Puerto del server

    // selectedUsuario: usuarioLogin = {
    //     usuario:'',
    //     contrasena:'',
    // };

    // usuarios: usuarioLogin[] = []; //arreglo de Usuarios



    constructor(private http : HttpClient, private router: Router) {}

    loginUsuario(usuario:any){
      return this.http.post<any>(this.URL_API , usuario, { observe: 'response'});
    }



    // loginUsuario(usuarios: usuarioLogin){
    //   //envio del objeto usuario al server
    //   return this.http.post<usuarioLogin[]>(this.URL_API, usuarios);
    // }



  }
