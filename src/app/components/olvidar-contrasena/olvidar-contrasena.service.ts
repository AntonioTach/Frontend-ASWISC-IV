import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class OlvidarContrasenaService {

  URL_API = 'http://localhost:4000/olvido-contrasena'; //Puerto del server

constructor(private http : HttpClient,
  private jwtHelper : JwtHelperService) { }

BuscarCorreo(email:any){
  console.log(email);
  return this.http.post<any>(this.URL_API, email);
}

BuscarCorreoPaciente(email:any){
  return this.http.post<any>('http://localhost:4000/olvido-contrasenaPaciente', email);
}

EnviarCorreo(info: any){
  return this.http.post<any>('http://localhost:4000/mandarEmail', info);
}

}
