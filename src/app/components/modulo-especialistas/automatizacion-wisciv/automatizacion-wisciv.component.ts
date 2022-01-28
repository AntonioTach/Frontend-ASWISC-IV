import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceRevisarPacienteService } from '../revisar-paciente/service-revisar-paciente.service'
import { ModificacionExpedienteServiceService } from 'src/app/components/modulo-especialistas/modificacion-expediente/modificacion-expediente-service.service'

@Component({
  selector: 'app-automatizacion-wisciv',
  templateUrl: './automatizacion-wisciv.component.html',
  styleUrls: ['./automatizacion-wisciv.component.css']
})
export class AutomatizacionWiscivComponent implements OnInit {

  public FormASWISC! : FormGroup; //Formulario de envio de datos prueba WISC-IV
  //falta service cuando se agregue tambien al constructor
  constructor(private router:Router, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private serviceRevisar: ServiceRevisarPacienteService, private modificarExpedienteService: ModificacionExpedienteServiceService) { }

  hide = true;
  id_paciente;
  pacientes: any = []

  usuario: string = '';
  id: any = null;//este seria la id del paciente

  ngOnInit(): void {

    this.cargarPacientes(); //obtener los pacientes del especialista

    //Validaciones buenas

    this.FormASWISC = this.formBuilder.group({
      Paciente: ['', [Validators.required,]],
      Fecha: ['', [Validators.required]],

      Cubos: ['', [Validators.required,Validators.min(1), Validators.max(4)]],
      Semejanzas: ['', [Validators.required]],
      Digitos: ['', [Validators.required]],
      Conceptos: ['', [Validators.required]],
      Claves: ['', [Validators.required]],
      Vocabulario: ['', [Validators.required]],
      LetrasNumeros: ['', [Validators.required]],
      Matrices: ['', [Validators.required]],
      Comprension: ['', [Validators.required]],
      BusquedaSimbolos: ['', [Validators.required]],
      FigurasIncompletas: ['', [Validators.required]],
      Animales: ['', [Validators.required]],
      Informacion: ['', [Validators.required]],
      Aritmetica: ['', [Validators.required]],
      Adivinanzas: ['', [Validators.required]],
    });


    //NO Validaciones para trabajar rapido
    // this.FormASWISC = this.formBuilder.group({

    // });
  }

  RegistrarDatos(){
    if (this.FormASWISC.invalid){
      return;
    }
    else{
      this.Automatizacion();
    }
  }
  Automatizacion(){
    console.log('Automatizacion Resultados');
    this.router.navigateByUrl('/modulo-especialistas/resultado-automatizacion-wisciv');
  }

  cargarPacientes() { //Obtener los pacientes del Especialista en el dropdown
    this.serviceRevisar.getPacientes().subscribe((res) => {
      this.pacientes = res;
    }, err => console.log(err))
  }





}
