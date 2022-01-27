import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagosPacientesService {

  constructor(
    private http: HttpClient
  ) { }
  getPagosHechos(id_paciente: string): Observable<any> {
    return this.http.get(`http://localhost:4000/carrito3/${id_paciente}`)
  }
}
