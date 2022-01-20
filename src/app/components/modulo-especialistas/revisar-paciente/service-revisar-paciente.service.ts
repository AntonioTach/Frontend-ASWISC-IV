import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceRevisarPacienteService {
  lista_pacientes: Pacientes[] = [
    { usuario: "Leonard222", nombre: "Leonardo", nacimiento: "22/05/2002", sexo: "Hombre" },
    { usuario: "Leonard222", nombre: "Leonardo", nacimiento: "22/05/2002", sexo: "Hombre" },
    { usuario: "Leonard222", nombre: "Leonardo", nacimiento: "22/05/2002", sexo: "Hombre" },
    { usuario: "Leonard222", nombre: "Leonardo", nacimiento: "22/05/2002", sexo: "Hombre" },
    { usuario: "Leonard222", nombre: "Juan", nacimiento: "22/05/2002", sexo: "Hombre" },
    { usuario: "Perez222", nombre: "Leonardo", nacimiento: "22/05/2002", sexo: "Hombre" },
    { usuario: "Leonard222", nombre: "Leonardo", nacimiento: "22/05/2002", sexo: "Hombre" },
  ];
  constructor(private http: HttpClient) { }

  public Pacientes(id_usuario?: string | null) {
    return this.http.get<any>('http://localhost:4000/Pacientes/' + id_usuario);
  }
  getPaciente() {
    return this.lista_pacientes.slice();//slice retorna una copia del estado de usuarios
  }

  eliminarPaciente(index: number) {
    this.lista_pacientes.splice(index, 1);//hay que pasarle que elemento quiero eliminar, y cuantos

  }
  getPacientes() {
    return this.http.get('http://localhost:4000/Pacientes/');
  }
}
