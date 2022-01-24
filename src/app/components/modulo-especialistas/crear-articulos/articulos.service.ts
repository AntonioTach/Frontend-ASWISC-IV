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
  //tomar todos los articulos
  getArticulos() {
    return this.HttpClient.get('http://localhost:4000/articulos')
  }
  //tomar los articulos personales
  getMisArticulos() {
    const id = localStorage.getItem('id_especialista');
    return this.HttpClient.get('http://localhost:4000/mis-articulos/' + id)
  }
  //tomar un articulo
  getArticulo(id: any) {
    return this.HttpClient.get('http://localhost:4000/articulo/' + id)
  }
  updateArticuloGuardar(id: any, object: any) {
    return this.HttpClient.put('http://localhost:4000/guardar-articulo/' + id, object);
  }
  updateArticuloPublicar(id: any, object: any) {
    return this.HttpClient.put('http://localhost:4000/publicar-articulo/' + id, object);
  }
}
