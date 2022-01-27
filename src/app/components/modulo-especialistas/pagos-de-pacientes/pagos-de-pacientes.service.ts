import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagosDePacientesService {

  constructor(private http: HttpClient) { }
  getPagos() {
    const id = localStorage.getItem('id_usuario')
    return this.http.get('http://localhost:4000/carrito/' + id);
  }

  getPagos2(id: string){

    return this.http.get('http://localhost:4000/carrito2/' + id);
  }
  subirPagos(id) {
    const p = {
      estatus: 2
    }
    return this.http.put('http://localhost:4000/pagado/' + id.toString(), p);
  }
}
