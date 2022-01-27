import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticuloServiceService {

constructor(private HttpClient: HttpClient) { }
getArticulo(id: any) {
  return this.HttpClient.get('http://localhost:4000/articulo/' + id)
}
}
