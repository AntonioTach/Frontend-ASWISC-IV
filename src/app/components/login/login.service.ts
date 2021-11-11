import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {usuarioLogin} from 'src/app/models/usuarioLogin';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


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



    constructor(
      private http : HttpClient,
      private router : Router,
      private jwtHelper : JwtHelperService
      ) {}

    loginUsuario(usuario:any){
      // return this.http.post<any>(this.URL_API , usuario, { observe: 'response'});
      return this.http.post<any>(this.URL_API, usuario);
    }

    esAutorizado():boolean{
      //const token = JSON.parse(localStorage.getItem('token')!); //Obtener el token en JSON
      // if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){ //da problemas
      //   return false;
      // }
      // return true;

      const token : string | any = localStorage.getItem('token');

      if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
        return false;
      }
      return true;
    }



    // loginUsuario(usuarios: usuarioLogin){
    //   //envio del objeto usuario al server
    //   return this.http.post<usuarioLogin[]>(this.URL_API, usuarios);
    // }



  }
