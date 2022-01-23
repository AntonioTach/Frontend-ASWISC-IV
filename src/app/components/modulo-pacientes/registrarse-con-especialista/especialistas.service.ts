import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EspecialistasService {

  constructor(private http: HttpClient) { }

  getEspecialistas() {
    return this.http.get('http://localhost:4000/buscar-Especialistas')
  }
}
