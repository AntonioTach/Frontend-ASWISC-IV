import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) { }
  getPagos() {
    const id = localStorage.getItem('id_usuario')
    return this.http.get('http://localhost:4000/carrito/' + id);
  }
  subirPagos(id) {
    const p = {
      estatus: 2
    }
    return this.http.put('http://localhost:4000/pagado/' + id.toString(), p);
  }
}
