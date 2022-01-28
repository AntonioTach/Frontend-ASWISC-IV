import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceRevisarPacienteService } from '../revisar-paciente/service-revisar-paciente.service'
import { ModificacionExpedienteServiceService } from 'src/app/components/modulo-especialistas/modificacion-expediente/modificacion-expediente-service.service'
import { AutomatizacionWiscivService } from './automatizacion-wisciv.service';
@Component({
  selector: 'app-automatizacion-wisciv',
  templateUrl: './automatizacion-wisciv.component.html',
  styleUrls: ['./automatizacion-wisciv.component.css']
})
export class AutomatizacionWiscivComponent implements OnInit {

  public FormASWISC! : FormGroup; //Formulario de envio de datos prueba WISC-IV
  //falta service cuando se agregue tambien al constructor
  constructor(private router:Router, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private serviceRevisar: ServiceRevisarPacienteService, private modificarExpedienteService: ModificacionExpedienteServiceService, private automatizacion: AutomatizacionWiscivService) { }

  hide = true;
  id_paciente;
  pacientes: any = []

  usuario: string = '';
  id: any = null;//este seria la id del paciente

  ngOnInit(): void {

    this.cargarPacientes(); //obtener los pacientes del especialista

    //Validaciones buenas

    this.FormASWISC = this.formBuilder.group({
      id_paciente: [''],
      Paciente: ['', [Validators.required,]],
      Fecha: ['', [Validators.required]],

      Cubos: ['', [Validators.required, Validators.min(0), Validators.max(68)]],
      Semejanzas: ['', [Validators.required, Validators.min(0), Validators.max(44)]],
      Digitos: ['', [Validators.required, Validators.min(0), Validators.max(32)]],
      Conceptos: ['', [Validators.required, Validators.min(0), Validators.max(28)]],
      Claves: ['', [Validators.required, Validators.min(0), Validators.max(119)]],
      Vocabulario: ['', [Validators.required, Validators.min(0), Validators.max(68)]],
      LetrasNumeros: ['', [Validators.required, Validators.min(0), Validators.max(30)]],
      Matrices: ['', [Validators.required, Validators.min(0), Validators.max(35)]],
      Comprension: ['', [Validators.required, Validators.min(0), Validators.max(42)]],
      BusquedaSimbolos: ['', [Validators.required, Validators.min(0), Validators.max(60)]],
      FigurasIncompletas: ['', [Validators.min(0), Validators.max(38)]],
      Registros: ['', [Validators.min(0), Validators.max(136)]],
      Informacion: ['', [ Validators.min(0), Validators.max(33)]],
      Aritmetica: ['', [Validators.min(0), Validators.max(34)]],
      Pistas: ['', [Validators.min(0), Validators.max(24)]],
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
      this.automatizacion.envioDatos(this.FormASWISC.value).subscribe(
        (res:any) => {

        },
        err => {
          console.log(err);
        }
      )
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
