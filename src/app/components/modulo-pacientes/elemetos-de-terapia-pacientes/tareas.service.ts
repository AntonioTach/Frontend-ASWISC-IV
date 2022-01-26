import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) { }
  getTareas() {
    const id = localStorage.getItem('id_usuario');
    return this.http.get('http://localhost:4000/tareas-paciente/' + id);
  }
}
