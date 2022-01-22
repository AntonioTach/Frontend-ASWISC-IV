import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { finalize } from 'rxjs/operators';
//Importar el service
import { ServiceRegistroEspecialistaService } from '../registro-especialista/service-registro-especialista.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-registro-especialista',
  templateUrl: './registro-especialista.component.html',
  styleUrls: ['./registro-especialista.component.css']
})
export class RegistroEspecialistaComponent implements OnInit {

  public formRegistro!: FormGroup;
  uploadPercent: any;
  urlImage: any;
  urlCurriculum: any;
  urlCedula: any;

  constructor(private formBuilder: FormBuilder, private especialistaService: ServiceRegistroEspecialistaService, private _snackBar: MatSnackBar, private router: Router, private storage: AngularFireStorage) {

  }

  hide = true;


  ngOnInit(): void {
    this.formRegistro = this.formBuilder.group({
      foto_profesional: ['',
        [
          Validators.required
        ]
      ], curriculum: ['',
        [
          Validators.required
        ]
      ], cedula: ['',
        [
          Validators.required
        ]
      ],
      nombre: ['',
        [
          Validators.required
        ]
      ],

      sexo: ['',
        [
          Validators.required
        ]
      ],

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
          Validators.required,
          Validators.maxLength(12),
        ]
      ],
      contrasena: ['',
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



  RegistroEspecialista() {
    if (this.formRegistro.invalid) {
      return;
    }
    else {
      //Metodo POST
      //console.log(this.formRegistro?.value),
      this.especialistaService.createEspecialista(this.formRegistro.value).subscribe(
        res => {
          console.log(res),
            console.log('correcto');
          this.correcto();
        },
        err => {
          console.log('ERROR que no se');
          console.log(err);
        }
      )

      //Timeout despues del mensaje de 3s para direccionar al Inicio
      setTimeout(() => {

        this.router.navigate(['login']);
      }, 3000);




      // this.CrearUsuario();
    }
  }

  //Uso del servicio de Post Especialista cuando sea valido el formulario
  // CrearUsuario(): any{
  //   console.log(this.formRegistro?.value),
  //   this.especialistaService.createEspecialista(this.formRegistro.value).subscribe(
  //     res => {
  //       console.log(res),
  //       console.log("Correcto");
  //     },
  //     err => {
  //       console.error(err);
  //     }
  //   )
  // }
  ingresarImagen(e: any) {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `Imagen/usuario${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }
  ingresarCurriculum(e: any) {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `Curriculum/usuario${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => this.urlCurriculum = ref.getDownloadURL())).subscribe();
  }
  ingresarCedula(e: any) {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `Cedula/usuario${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => this.urlCedula = ref.getDownloadURL())).subscribe();
  }
  correcto() {
    this._snackBar.open('Registro Correcto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
