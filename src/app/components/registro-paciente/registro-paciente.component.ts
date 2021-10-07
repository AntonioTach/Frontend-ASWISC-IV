import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

//Importar servicio Usuario Paciente
import { ServiceUsuarioPacienteService } from '../../services/usuario-paciente/service-usuario-paciente.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})
export class RegistroPacienteComponent implements OnInit {

  public formRegistroPaciente!: FormGroup;

  constructor(private formBuilder: FormBuilder, private pacienteService : ServiceUsuarioPacienteService, private _snackBar: MatSnackBar, private router: Router) { }

  hide = true;

  ngOnInit(): void {
    this.formRegistroPaciente = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      nacimiento: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
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
      console.log(this.formRegistroPaciente?.value);
    }

  };

}
