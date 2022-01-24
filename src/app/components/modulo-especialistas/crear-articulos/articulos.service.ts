import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private HttpClient: HttpClient) { }

  //guardar articulo
  guardarArticulo(articulo: any) {
    return this.HttpClient.post('http://localhost:4000/guardar-articulo', articulo);
  }
  //guardarArticulo
  publicarArticulo(articulo: any) {
    return this.HttpClient.post('http://localhost:4000/publicar-articulo', articulo);
  }
}
