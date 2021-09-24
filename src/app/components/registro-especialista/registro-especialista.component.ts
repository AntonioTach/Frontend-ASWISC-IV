import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { ServiceRegistroEspecialistaService } from '../registro-especialista/service-registro-especialista.service';

@Component({
  selector: 'app-registro-especialista',
  templateUrl: './registro-especialista.component.html',
  styleUrls: ['./registro-especialista.component.css']
})
export class RegistroEspecialistaComponent implements OnInit {

  public formRegistro!: FormGroup;
  private _snackBar: any;

  constructor(private formBuilder: FormBuilder, private especialistaService : ServiceRegistroEspecialistaService){

  }

  hide = true;


  ngOnInit(): void {
    this.formRegistro = this.formBuilder.group({
      nombre: ['',
      [
        Validators.required
      ]
   ],

    //   sexo: ['',
    //   [
    //     Validators.required
    //   ]
    // ],

      direccion: ['',
      [
        Validators.required
      ]
    ],

      nacimiento: ['',
      [
        Validators.required
      ]
    ],

      usuario: ['',
      [
        Validators.required
      ]
    ],
      password: ['',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ],

      email: ['',
      [
        Validators.required,
        Validators.email
      ]
    ],

      telefono: ['',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]
    ],

      profesion: ['',
      [
        Validators.required
      ]
    ],

      estudios: ['',
      [
        Validators.required
      ]
    ]
    });


  }



  RegistroEspecialista(){
    if (this.formRegistro.invalid){
      return;
    }
    else{
      console.log(this.formRegistro.value);
      alert("Valido!");

    //Uso del servicio de Post Especialista cuando sea valido el formulario
     this.especialistaService.postEspecialista();

    }
  }



}
