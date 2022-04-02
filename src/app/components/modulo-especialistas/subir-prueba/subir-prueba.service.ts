import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubirPruebaService {

  constructor(private http: HttpClient) { }
  //subir prueba
  postPrueba(prueba: any) {
    return this.http.post('http://localhost:4000/prueba', prueba);

  }

  postTarea(tarea: any) { //POST DE ASIGNAR TAREA
    return this.http.post('http://localhost:4000/tarea', tarea);
  }
  //tomar las tareas que asigno el especialista
  getTareasEspecialista(id: any) {
    return this.http.get('http://localhost:4000/tareas/' + id);
  }
  // tomar una sola tarea
  getTarea(id: any) {
    return this.http.get('http://localhost:4000/tarea/' + id)
  }
  
  updateTarea(id: any, tarea: any){
    return this.http.put('http://localhost:4000/actualizar-tarea/' + id, tarea)
  }


}
