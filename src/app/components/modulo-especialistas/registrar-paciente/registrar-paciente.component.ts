import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

import { ServiceRegistrarPacienteService } from './service-registrar-paciente.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {

  // public FormRegistrarPaciente!: FormGroup;
  public FormRegistrarPaciente!: FormGroup;

  constructor(private dp: DatePipe,private formBuilder: FormBuilder, private registrarPacienteService: ServiceRegistrarPacienteService, private _snackBar: MatSnackBar, private router: Router) { }

  hide = true;
  sexo: string | undefined;
  sexos: string[] = ['Masculino', 'Femenino'];
  id_usuario = localStorage.getItem('id_especialista');
  precio = localStorage.getItem('precio')

  public fechaMin:any;
  public fechaMinStr:String;
  public fechaMax:any;
  public fechaMaxStr:String;

  ngOnInit(): void {

    this.fechaMin = new Date(new Date().getFullYear()-30, new Date().getMonth(), new Date().getDay());
    this.fechaMinStr = this.dp.transform(this.fechaMin, "yyyy-MM-dd");
    this.fechaMax = new Date(new Date().getFullYear()-5, new Date().getMonth(), new Date().getDay());
    this.fechaMaxStr = this.dp.transform(this.fechaMax, "yyyy-MM-dd");


    this.FormRegistrarPaciente = this.formBuilder.group({
      id_usuario: this.id_usuario, //ID del ESPECIALISTA que esta registrando
      nombre: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      nacimiento: ['', [Validators.required]],
      usuario: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      precio_consulta: this.precio
    });
  }
  RegistradoMensaje() {
    this._snackBar.open('Registro Correcto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  direccionamiento(){
    this.router.navigateByUrl('/modulo-especialistas');
  }

  RegistrarPaciente() {
    if (this.FormRegistrarPaciente.invalid) {
      return
    }
    else {
      console.log(this.FormRegistrarPaciente?.value);
      this.RegistradoMensaje();
      this.direccionamiento();
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
