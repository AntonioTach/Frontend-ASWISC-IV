import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaServiceService {

  constructor(private HttpClient: HttpClient) { }

  getIdEspecialista() {
    var id_usuario = localStorage.getItem('id_usuario');
    console.log(id_usuario);
    return this.HttpClient.get<any>('http://localhost:4000/buscar-Especialistas/' + id_usuario)
  }
}
