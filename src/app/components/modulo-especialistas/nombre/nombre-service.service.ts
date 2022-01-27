import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NombreServiceService {

  constructor(private http: HttpClient) { }

  getEspecialista(id: string): Observable<any> {
    return this.http.get(`http://localhost:4000/buscar-EspecialistaAll/${id}`)
  }

  updateEspecilista(id: string, objeto: any): Observable<any> {
    return this.http.post(`http://localhost:4000/editar-Especialista/${id}`, objeto)
  }

}
