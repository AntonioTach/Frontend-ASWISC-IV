import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { ServiceRevisarPacienteService } from '../revisar-paciente/service-revisar-paciente.service'
import { ModificacionExpedienteServiceService } from './modificacion-expediente-service.service'

@Component({
  selector: 'app-modificacion-expediente',
  templateUrl: './modificacion-expediente.component.html',
  styleUrls: ['./modificacion-expediente.component.css']
})
export class ModificacionExpedienteComponent implements OnInit {
  // public FormModificarExpediente!: FormGroup;
  public FormModificarExpediente!: FormGroup;
  fecha: any;

  constructor(private formBuilder: FormBuilder, private modificarExpedienteService: ModificacionExpedienteServiceService, private _snackBar: MatSnackBar, private router: Router, private serviceRevisar: ServiceRevisarPacienteService) { }
  usuario: string = '';
  correo: string = '';
  telefono: any = null;

  hide = true;
  sexo: string | undefined;
  sexos: string[] = ['Masculino', 'Femenino'];
  id_usuario = localStorage.getItem('id_usuario');
  id_paciente = 0
  pacientes: any = []
  ngOnInit(): void {
    this.cargarPacientes();
    this.id_paciente = 0;
    this.cargarInformacion();
    this.FormModificarExpediente = this.formBuilder.group({
      id_usuario: this.id_usuario, //ID del ESPECIALISTA que esta registrando
      nombre: this.pacientes.nombre,
      sexo: this.pacientes.sexo,
      nacimiento: this.pacientes.nacimiento,
      usuario: this.pacientes.usuario,
      email: this.pacientes.email,
      telefono: this.pacientes.telefono,
      ocupacion: [this.pacientes.ocupacion, [Validators.required]],
      estudios: [this.pacientes.estudios, [Validators.required]],
      origen: [this.pacientes.origen, [Validators.required]],
      observaciones: [this.pacientes.observaciones, [Validators.required]],
    });
  }
  cargarInformacion() {
    console.log(this.id_paciente);
    this.modificarExpedienteService.getPaciente(this.id_paciente.toString()).subscribe((res: any) => {
      var obj = res[0]
      console.log(obj);
      this.usuario = obj.usuario;
      this.telefono = obj.telefono;
      this.fecha = obj.nacimiento;
      this.correo = obj.email;
    }, err => console.log(err))
  }
  cargarPacientes() {
    this.serviceRevisar.getPacientes().subscribe((res) => {
      this.pacientes = res;
    }, err => console.log(err))
  }
  RegistradoMensaje() {
    this._snackBar.open('Registro Correcto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  capturar(id: number) {

  }
  RegistrarPaciente() {
    if (this.FormModificarExpediente.invalid) {
      return
    }
    else {
      console.log(this.FormModificarExpediente?.value);
      this.RegistradoMensaje();

      this.modificarExpedienteService.registrarPaciente(this.FormModificarExpediente.value).subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err);
        }
      )
    }

  };

}
