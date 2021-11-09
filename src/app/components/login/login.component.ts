import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

//Importar servicio para login
import { ServiceLoginUsuariosService } from '../login/login.service';

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
        let token = res.headers.get('Token');
        console.log(res);
        // console.log(res.token);
        localStorage.setItem('Token', token); //Guardado de token en el localStorage

        //this.router.navigate(['modulo-especialistas']);

        //console.log('correcto');
      },
      err => {
        console.log(err);
        this.error();
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

  error(){
    this._snackBar.open('Usuario o contraseña Incorrecto', '', {
      duration: 5000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  correcto(){
    this._snackBar.open('Ingreso Correcto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
