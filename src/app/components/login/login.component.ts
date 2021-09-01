import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  hide = true;
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  ngOnInit(): void {
  }

  ingresar(){
   
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == "AntonioV18" && password == "ferrari")
    {
      //Redireccion
      this.router.navigate(['dashboard']);
    }
    else{
       this.error();
       this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña Incorrecto', '', {
      duration: 5000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
