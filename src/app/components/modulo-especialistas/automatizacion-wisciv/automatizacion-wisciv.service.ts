import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutomatizacionWiscivService {

constructor(private http: HttpClient) { }

  envioDatos(datos: any){
    return this.http.post('http://localhost:4000/aswisc/aswisc/', datos);
  }

}
