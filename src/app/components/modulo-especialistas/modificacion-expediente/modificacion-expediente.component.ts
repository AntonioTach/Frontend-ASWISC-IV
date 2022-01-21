import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThisReceiver } from '@angular/compiler';

import{ModificacionExpedienteServiceService} from './modificacion-expediente-service.service'

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modificacion-expediente',
  templateUrl: './modificacion-expediente.component.html',
  styleUrls: ['./modificacion-expediente.component.css']
})
export class ModificacionExpedienteComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
 
 // public FormModificarExpediente!: FormGroup;
 public FormModificarExpediente! : FormGroup;

  constructor(private formBuilder: FormBuilder, private modificarExpedienteService: ModificacionExpedienteServiceService ,private _snackBar: MatSnackBar, private router: Router) { }

  hide = true;
  sexo: string | undefined;
  sexos: string[] = ['Masculino', 'Femenino'];
  id_usuario = localStorage.getItem('id_usuario');

  ngOnInit(): void {


    this.FormModificarExpediente = this.formBuilder.group({
      id_usuario:this.id_usuario, //ID del ESPECIALISTA que esta registrando
      nombre: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      nacimiento: ['', [Validators.required]],
      usuario: ['', [Validators.required,Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }
  RegistradoMensaje(){
    this._snackBar.open('Registro Correcto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  RegistrarPaciente(){
    if (this.FormModificarExpediente.invalid){
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
