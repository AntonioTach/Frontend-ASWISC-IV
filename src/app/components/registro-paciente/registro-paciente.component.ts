import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

//Importar servicio Usuario Paciente
import { ServiceRegistroPacienteService } from '../registro-paciente/service-registro-paciente.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})
export class RegistroPacienteComponent implements OnInit {

  public formRegistroPaciente!: FormGroup;

  public fechaMin:any;
  public fechaMinStr:String;
  public fechaMax:any;
  public fechaMaxStr:String;

  public fechaMenor:any;
  public fechaMenor2:any;
  public fechaMenorStr:String;
  public year:any;
  public yearNow:any;
  public yearNow2:any;
  public diff:any;

  constructor(public dialog: MatDialog, private dp:DatePipe,private formBuilder: FormBuilder, private pacienteService : ServiceRegistroPacienteService, private _snackBar: MatSnackBar, private router: Router) { }

  hide = true;

  FormRegistroPaciente: FormGroup = new FormGroup({
    nombre:  new FormControl('', [Validators.required, Validators.maxLength(70)]),
    sexo:  new FormControl('', [Validators.required]),
    nacimiento:  new FormControl('', [Validators.required]),
    usuario:  new FormControl('', [Validators.required, Validators.maxLength(12)]),
    email:  new FormControl('', [Validators.required, Validators.email]),
    contrasena:  new FormControl('', [Validators.required, Validators.minLength(8)]),
    telefono:  new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    nombretutor:  new FormControl('', []),
    telefonotutor:  new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
  });


  ngOnInit(): void {
    this.fechaMin = new Date(new Date().getFullYear()-30, new Date().getMonth(), new Date().getDay());
    this.fechaMinStr = this.dp.transform(this.fechaMin, "yyyy-MM-dd");
    this.fechaMax = new Date(new Date().getFullYear()-5, new Date().getMonth(), new Date().getDay());
    this.fechaMaxStr = this.dp.transform(this.fechaMax, "yyyy-MM-dd");

  }

  RegistroPaciente(){
    if (this.FormRegistroPaciente.invalid){
      return
    }
    else {
      // //obtener año del paciente
      this.fechaMenor = this.FormRegistroPaciente.value.nacimiento;
      this.fechaMenor2 = new Date(this.fechaMenor);
      this.year = this.fechaMenor2.getFullYear();

      //obtener año actual
      this.yearNow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay());
      this.yearNow2 = this.yearNow.getFullYear();

      this.diff = this.yearNow2 - this.year;

      if (this.diff < 18){
          this.correcto();
      }
      else {
        this.mayorEdad();
      }
      this.pacienteService.createPaciente(this.FormRegistroPaciente.value).subscribe(
        res => {
          this.mayorEdad();
        },
        err => {
          console.log(err);
        }
      )

        setTimeout(() => {

          this.router.navigate(['login']);
        }, 3000);

    }

  };

  correcto(){
    this._snackBar.open('Registro Correcto Menor de Edad', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  mayorEdad(){
    this._snackBar.open('Registro Correcto Mayor de Edad', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
