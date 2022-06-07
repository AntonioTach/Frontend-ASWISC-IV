import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceRevisarPacienteService {
  constructor(private http: HttpClient) { }

  public Pacientes(id_usuario?: string | null) {
    return this.http.get<any>('http://localhost:4000/Pacientes/' + id_usuario);
  }
  //encontrar un solo paciente
  getPaciente(id: string) {
    return this.http.get('http://localhost:4000/buscar-paciente/' + id);
  }
  eliminarPaciente(id: string) {
    //this.lista_pacientes.splice(index, 1);//hay que pasarle que elemento quiero eliminar, y cuantos
    console.log(id)
    return this.http.get<any>('http://localhost:4000/eli-paciente/' + id);
  }
  //aparecen los pacientes del especialista
  getPacientes() {
    var id_especialista = localStorage.getItem('id_especialista')
    return this.http.get('http://localhost:4000/Pacientes/' + id_especialista);
  }

  eliminarExpediente(id: string){
    return this.http.get<any>('http://localhost:4000/eli-exp/' + id);
  }
}
