import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

import { ServiceRegistrarPacienteService } from './service-registrar-paciente.service';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {

  // public FormRegistrarPaciente!: FormGroup;
  public FormRegistrarPaciente!: FormGroup;

  constructor(private formBuilder: FormBuilder, private registrarPacienteService: ServiceRegistrarPacienteService, private _snackBar: MatSnackBar, private router: Router) { }

  hide = true;
  sexo: string | undefined;
  sexos: string[] = ['Masculino', 'Femenino'];
  id_usuario = localStorage.getItem('id_usuario');

  ngOnInit(): void {


    this.FormRegistrarPaciente = this.formBuilder.group({
      id_usuario: this.id_usuario, //ID del ESPECIALISTA que esta registrando
      nombre: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      nacimiento: ['', [Validators.required]],
      usuario: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }
  RegistradoMensaje() {
    this._snackBar.open('Registro Correcto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  RegistrarPaciente() {
    if (this.FormRegistrarPaciente.invalid) {
      return
    }
    else {
      console.log(this.FormRegistrarPaciente?.value);
      this.RegistradoMensaje();

      this.registrarPacienteService.registrarPaciente(this.FormRegistrarPaciente.value).subscribe(
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
