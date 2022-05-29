import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UpdateContrasenaService } from './update-contrasena.service';

@Component({
  selector: 'app-recuperar-especialista',
  templateUrl: './recuperar-especialista.component.html',
  styleUrls: ['./recuperar-especialista.component.css']
})
export class RecuperarEspecialistaComponent implements OnInit {
  hide = false;

  public formActualizar!: FormGroup;

  constructor(private UpdateContrasena:UpdateContrasenaService ,private formBuilder: FormBuilder,  private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.formActualizar = this.formBuilder.group({
      token: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(14)]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]]
    })
  }


  MensajeActualizado(){
    this._snackBar.open('Se ha actualizado la contraseña', '', {
      duration: 5000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
     this.router.navigate(["/"]);
  }
  MensajeNoCorrecto(){
    this._snackBar.open('El token es incorrecto', '', {
      duration: 5000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  regresaHome(){
    this.router.navigateByUrl('/login');
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

  ServiceActualizar(){
    let contrasena = this.formActualizar.getRawValue().contrasena;
    let email = localStorage.getItem("email");
    const paquete = {
      contrasena, email
    }
    this.UpdateContrasena.updateContrasenaEspecialista(paquete).subscribe(
      (res:any) => {
        this.MensajeActualizado();
      },
      err => console.log(err)
    )
  }
}
