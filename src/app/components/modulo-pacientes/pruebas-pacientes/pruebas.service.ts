import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private http: HttpClient) { }

  getPruebas(id: any) {
    return this.http.get('http://localhost:4000/pruebas-paciente/' + id)
  }
  getPrueba(id: any) {
    return this.http.get('http://localhost:4000/prueba/' + id)
  }
}
