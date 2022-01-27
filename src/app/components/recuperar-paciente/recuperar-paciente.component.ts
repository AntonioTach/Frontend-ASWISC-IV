import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UpdateContrasenaService } from '../recuperar-especialista/update-contrasena.service';


@Component({
  selector: 'app-recuperar-paciente',
  templateUrl: './recuperar-paciente.component.html',
  styleUrls: ['./recuperar-paciente.component.css']
})
export class RecuperarPacienteComponent implements OnInit {

  hide = false;
  public formActualizar!: FormGroup;
  constructor(private UpdateContrasena:UpdateContrasenaService , private formBuilder: FormBuilder,  private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.formActualizar = this.formBuilder.group({
      token: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ServiceActualizar(){
    let contrasena = this.formActualizar.getRawValue().contrasena;
    let email = localStorage.getItem("email");
    const paquete = {
      contrasena, email
    }
    this.UpdateContrasena.updateContrasenaPaciente(paquete).subscribe(
      res => {
        this.MensajeActualizado();
      },
      err => (console.log(err))
    )
  }

  MensajeActualizado(){
    this._snackBar.open('Se ha actualizado la contraseña', '', {
      duration: 5000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  MensajeNoCorrecto(){
    this._snackBar.open('El token es incorrecto', '', {
      duration: 5000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  Actualizar(){
    if(this.formActualizar.invalid){
      return
    }
    else{
       //Evaluar el token
       let token = this.formActualizar.getRawValue().token;
       let token2 = localStorage.getItem("id");
        if (token == token2){
           //Si el token ingresado del correo es identico al generado se aprueba el update
           this.ServiceActualizar();
        }
        else{
        this.MensajeNoCorrecto();
        }
    }
  }
}
