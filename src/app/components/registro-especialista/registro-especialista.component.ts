import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('cedula') cedula: ElementRef | any;
  @ViewChild('curriculum') curriculum: ElementRef | any;
  @ViewChild('image') image: ElementRef | any;//toma la url de la pantalla
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
      foto_profesional: [''], curriculum: [''], cedula: [''],
      nombre: ['',
        [
          Validators.required, Validators.maxLength(70)
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
      ],

      precio: ['',
        [
          Validators.required
        ]
      ]
    });


  }



  RegistroEspecialista() {

    this.formRegistro.value['curriculum'] = this.curriculum.nativeElement.value;
    this.formRegistro.value['foto_profesional'] = this.image.nativeElement.value;//asar la url de lafoto
    this.formRegistro.value['cedula'] = this.cedula.nativeElement.value;
    console.table(this.formRegistro.value)
    this.correcto();
    console.log(this.formRegistro.invalid)
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
      console.table(this.formRegistro.value)
      this.router.navigate(['login']);


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
  //subir documentos
  ingresarImagen(e: any) {//se recibe el evento
    const id = Math.random().toString(36).substring(2);//se genera un id random
    const file = e.target.files[0];//toma el primer archivo que encuentre
    const filePath = `Imagen/usuario${id}`;////se genera la ruta
    const ref = this.storage.ref(filePath);//le mando la ruta al servidor
    const task = this.storage.upload(filePath, file);//mandar la imagen al servidor
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();//tomar la url
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
    console.log(e.target.files[0])
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
