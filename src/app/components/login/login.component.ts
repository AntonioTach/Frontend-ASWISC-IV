import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Importar servicio para login
import { ServiceLoginUsuariosService } from '../login/login.service';

import decode from 'jwt-decode';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  noCoinciden = true;
  form: FormGroup;

  hide = true;
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router, private loginService : ServiceLoginUsuariosService) {
    this.form = this.fb.group({
      usuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]]
    })
  }


  ngOnInit(): void {
  }
  ingresar(){

    // const usuario = this.form.value.usuario;
    // const contrasena = this.form.value.password;

    this.loginService.loginUsuario(this.form.value).subscribe(
      (res:any) => {
        //console.log(res.token);
        localStorage.setItem('token', res.token); //Se guarda el Token en el localStorage
        localStorage.setItem('usuario', res.usuario); //usuario
        localStorage.setItem('id_tipo', res.id_tipo); //id tipo
        localStorage.setItem('id_usuario', res.id_usuario);


        //localStorage.setItem('token', res.headers.get('token')); //Se guarda el Token en el localStorage
        this.direccionar();

        if(res == false){
          this.error2();
        }

      },
      (err:any) => {
        console.log("usuario NO valido");
        this.error2();
      }

    );



    // if(usuario == "AntonioV18" && contrasena == "ferrari")
    // {
    //   this.correcto();
    //   //Redireccion
    //   //this.router.navigate(['dashboard']);
    // }
    // else{
    //    this.error();
    //    this.form.reset();
    // }
  }

  direccionar(){
    //Obtener el id del token
    const token : string | any = localStorage.getItem('token');
    const id_tipo : string | any = localStorage.getItem('id_tipo');

      if (id_tipo == 1){
          this.correcto();
          this.router.navigateByUrl('/modulo-especialistas');
      }
      else if (id_tipo == 2){
          this.correcto();
          this.router.navigateByUrl('/modulo-pacientes');

      }
      else {
          console.log('Error de token');
          //this.error2();
      }
  }

  error2(){
    this._snackBar.open('Usuario o contraseña Incorrecto', '', {
      duration: 5000, //5s
      panelClass: "red",
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  correcto(){
    this._snackBar.open('Ingreso Correcto', '', {
      duration: 2000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    }
    );
  }

}
