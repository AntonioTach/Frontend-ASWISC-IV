import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceBajaEspecialistaService {

constructor(private http : HttpClient) { }

public DeleteEspecialista(id_usuario?: string | null){
  return this.http.delete('http://localhost:4000/eliminar-Especialista/' + id_usuario);
}

}
