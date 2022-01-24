import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NombreServiceService {

  // selectedPaciente: usuarioPaciente = {
  //   nombre: '',
  //   usuario: '',
  //   email: '',
  //   sexo: '',
  //   estudios: '',
  //   telefono: 0,
  //   nombretutor: '',
  //   telefonotutor: 0,
  //   contrasena: '',
  // };

  // pacientes: usuarioPaciente[] = []; //arreglo de Pacientes

constructor(private http: HttpClient) { }

// getPaciente() {
//   var id_usuario = localStorage.getItem('id_usuario')
//   return this.http.get('http://localhost:4000/buscar-PacienteNombre/' + id_usuario);
// }

// updatePaciente(id: string, objeto: any): Observable<any> {
//   console.log(id, objeto);
//   return this.http.post('http://localhost:4000/' + 'editar-Paciente/' + id, objeto);
// }

}
