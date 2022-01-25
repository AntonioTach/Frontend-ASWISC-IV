import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubirPruebaService {

  constructor(private http: HttpClient) { }
  postPrueba(prueba: any) {
    return this.http.post('http://localhost:4000/prueba', prueba);

  }

  postTarea(tarea: any) { //POST DE ASIGNAR TAREA
    return this.http.post('http://localhost:4000/tarea', tarea);
  }

}
