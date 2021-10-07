import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioEspecialista } from 'src/app/models/usuarioEspecialista';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegistroEspecialistaService {

  URL_API = 'http://localhost:4000/api/especialistas/registro'; //Puerto del server NODE

  selectedEspecialista: usuarioEspecialista = {
    nombre: '',
    direccion: '',
    email: '',
    profesion: '',
    telefono: 0,
    estudios: '',
    usuario: '',
    contrasena: '',
  };

  especialistas: usuarioEspecialista[] = []; //arreglo de especialistas



  constructor(private http : HttpClient) {}



  createEspecialista(especialista: usuarioEspecialista){
    //envio del objeto especialista al server
    return this.http.post<usuarioEspecialista[]>(this.URL_API, especialista);

    //return this.http.post(this.URL_API, especialista);
  }

  // getEspecialistas(){ //prueba
  //   return this.http.get(this.URL_API);

  // }


}
