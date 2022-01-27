import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OlvidarContrasenaService } from './olvidar-contrasena.service';

@Component({
  selector: 'app-olvidar-contrasena',
  templateUrl: './olvidar-contrasena.component.html',
  styleUrls: ['./olvidar-contrasena.component.css']
})

export class OlvidarContrasenaComponent implements OnInit {


  public formRecuperacion!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private ServiceOlvidar:OlvidarContrasenaService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.formRecuperacion = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
    this.EnvioCorreo();
  }

  BuscarCorreo(){
    if (this.formRecuperacion.invalid){
      return
    }
    else{
      this.ServiceEspecialista();
      this.ServicePaciente();
    }
  }

  ServiceEspecialista(){
    this.ServiceOlvidar.BuscarCorreo(this.formRecuperacion.value).subscribe(
      (res:any) => {
        if (res == true){
          console.log('Existe en Especialistas');
          this.MensajeCorreo();
          //Obtiene email del formulario
          let email2 = this.formRecuperacion.getRawValue().email;
          localStorage.setItem('email', email2);
          this.EnvioCorreo();
          this.router.navigateByUrl('/recuperar-especialista');
        }
        else if (res == false){
          console.log('No existe en Especialistas');
        }
      }, err => console.log(err)
    )
  }

  ServicePaciente(){
    this.ServiceOlvidar.BuscarCorreoPaciente(this.formRecuperacion.value).subscribe(
      (res:any) => {
        if (res == true){
          console.log('Existe en Pacientes');
          this.MensajeCorreo();
          //Obtiene email del formulario
          let email2 = this.formRecuperacion.getRawValue().email;
          localStorage.setItem('email', email2);
          this.EnvioCorreo();
          this.router.navigateByUrl('/recuperar-paciente');
        }
        else if (res == false){
          console.log('No existe en Pacientes');
        }
      }, err => console.log(err)
    )
  }

  EnvioCorreo(){
    const id = Math.random().toString(36).substring(2);
    localStorage.setItem('id', id);
    let email = localStorage.getItem("email");
    let token = localStorage.getItem("id");
    const paquete = {
      token, email
    }
    this.ServiceOlvidar.EnviarCorreo(paquete).subscribe(
      (res:any) => {
        console.log('correo enviado correcto');
      }, err => console.log(err)
    )
  }



  MensajeCorreo(){
    this._snackBar.open('Se ha enviado un correo para la recuperacion de contraseña', '', {
      duration: 5000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  MensajeNo(){
    this._snackBar.open('No hay resultados con ese correo', '', {
      duration: 5000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
