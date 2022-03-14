import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

//Importar servicio Usuario Paciente
import { ServiceRegistroPacienteService } from '../registro-paciente/service-registro-paciente.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})
export class RegistroPacienteComponent implements OnInit {

  public formRegistroPaciente!: FormGroup;

  constructor(private formBuilder: FormBuilder, private pacienteService : ServiceRegistroPacienteService, private _snackBar: MatSnackBar, private router: Router) { }

  hide = true;

  ngOnInit(): void {
    this.formRegistroPaciente = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(70)]],
      sexo: ['', [Validators.required]],
      nacimiento: ['', [Validators.required]],
      usuario: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });

  }

  RegistroPaciente(){
    if (this.formRegistroPaciente.invalid){
      return
    }
    else {
      //console.log(this.formRegistroPaciente?.value);
      //METODO POST Crear Paciente
      this.pacienteService.createPaciente(this.formRegistroPaciente.value).subscribe(
        res => {
          console.log(res),
          console.log('correcto');
          this.correcto();
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
    this._snackBar.open('Registro Correcto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
