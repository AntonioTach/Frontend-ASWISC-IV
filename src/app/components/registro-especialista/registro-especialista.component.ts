import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro-especialista',
  templateUrl: './registro-especialista.component.html',
  styleUrls: ['./registro-especialista.component.css']
})
export class RegistroEspecialistaComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      nacimiento: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      profesion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      estudios: new FormControl('', [Validators.required]),
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  RegistroEspecialista(){

  }

}
