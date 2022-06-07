import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EliminarTareaService {

constructor(private http: HttpClient) { }

eliminarTarea(id: number): Observable<any> {
  return this.http.delete(`http://localhost:4000/delete-tarea/${id}`)
}

}
