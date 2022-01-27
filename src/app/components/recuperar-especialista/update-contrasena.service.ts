import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateContrasenaService {

constructor(private http : HttpClient) { }

updateContrasenaEspecialista(info: any){
  return this.http.put('http://localhost:4000/updateContrasena-Especialista', info);
}

updateContrasenaPaciente(info: any){
  return this.http.put('http://localhost:4000/updateContrasena-Paciente', info);
}

}
