import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { NombrePacienteService } from './nombre-paciente.service';
@Component({
  selector: 'app-nombre-paciente',
  templateUrl: './nombre-paciente.component.html',
  styleUrls: ['./nombre-paciente.component.css']
})
export class NombrePacienteComponent implements OnInit {

  usuario = localStorage.getItem('usuario');
  id_usuario= localStorage.getItem('id_usuario');
   // public FormRegistrarPaciente!: FormGroup;
 public FormRegistrarPaciente! : FormGroup;

 constructor(private formBuilder: FormBuilder, private nombrePacienteService:NombrePacienteService  ,private _snackBar: MatSnackBar, private router: Router) { }

 hide = true;
 sexo: string | undefined;
 sexos: string[] = ['Masculino', 'Femenino'];
 

 ngOnInit(): void {


   this.FormRegistrarPaciente = this.formBuilder.group({
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

 RegistrarPaciente(){
   if (this.FormRegistrarPaciente.invalid){
     return
   }
   else {
     console.log(this.FormRegistrarPaciente?.value);
     this.nombrePacienteService.registrarPaciente(this.FormRegistrarPaciente.value).subscribe(
       res => {
         console.log(res),
         console.log('correcto');
       },
       err => {
         console.log(err);
       }
     )

   }

 };

}
