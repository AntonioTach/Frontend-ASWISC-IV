import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisArticulosService {

  constructor(
    private http: HttpClient
  ) { }

  eliminarArticulo(id: string): Observable<any> {
    return this.http.delete(`http://localhost:4000/delete-articulo/${id}`)
  }
}
