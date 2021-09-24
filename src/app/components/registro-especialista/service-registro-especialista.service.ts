import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegistroEspecialistaService {

  URL_API = 'http://localhost:4000/api/especialistas';

  constructor(private http : HttpClient) {}

  postEspecialista(){
    // return this.http.post(this.URL_API);

  }
}
