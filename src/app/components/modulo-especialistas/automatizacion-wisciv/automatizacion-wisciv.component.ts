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

  FormASWISC: FormGroup = new FormGroup({
    id_usuario: new FormControl(''),
    Fecha:  new FormControl(['', [Validators.required]]),

    Cubos:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(68)]),
    Semejanzas:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(44)]),
    Digitos:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(32)]),
    Conceptos:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(28)]),
    Claves:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(119)]),
    Vocabulario:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(68)]),
    LetrasNumeros:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)]),
    Matrices:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(35)]),
    Comprension:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(42)]),
    BusquedaSimbolos:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(60)]),
    FigurasIncompletas:  new FormControl('', [Validators.min(0), Validators.max(38)]),
    Registros:  new FormControl('', [Validators.min(0), Validators.max(136)]),
    Informacion:  new FormControl('', [ Validators.min(0), Validators.max(33)]),
    Aritmetica:  new FormControl('', [Validators.min(0), Validators.max(34)]),
    Pistas: new FormControl('', [Validators.min(0), Validators.max(24)]),
  }); //Formulario de envio de datos prueba WISC-IV
  //falta service cuando se agregue tambien al constructor
  constructor(private router:Router, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private serviceRevisar: ServiceRevisarPacienteService, private modificarExpedienteService: ModificacionExpedienteServiceService, private automatizacion: AutomatizacionWiscivService) { }

  hide = true;
  pacientes: any = []

  usuario: string = '';
  id: any = null;//este seria la id del paciente

  ngOnInit(): void {
    this.cargarPacientes(); //obtener los pacientes del especialista
  }

  RegistrarDatos(){
    if (this.FormASWISC.invalid){
      return;
    }
    else{
      this.automatizacion.envioDatos(this.FormASWISC.value).subscribe(
        (res: {
          success: boolean,
          message: string,
          data: any
        }) => {
          console.log('Resultados prueba Comprension Verbal: ', res.data.comprensionVerbal)
          console.log('Resultados prueba Escala total: ', res.data.escalaTotal)
          console.log('Resultados prueba Razonamiento Perceptual: ', res.data.razonamientoPerceptual)
          console.log('Resultados prueba Velocidad de Procesamiento: ', res.data.velociedadDeProcesamiento)
          console.log('Resultados prueba memoria de trabajo: ', res.data.memoriaDeTrabajo)
          console.log('Fecha de nacimiento del Paciente: ', res.data.nacimiento)
          // @TODO: Descomentar cuando quieras que te mande a la tabla
          if (res.success)
            this.Automatizacion()
        },
        err => {
          console.log(err);
        }
      )
    }
  }
  Automatizacion(){
    this.router.navigateByUrl('/modulo-especialistas/resultado-automatizacion-wisciv');
  }

  cargarPacientes() { //Obtener los pacientes del Especialista en el dropdown
    this.serviceRevisar.getPacientes().subscribe((res) => {
      this.pacientes = res;
    }, err => console.log(err))
  }





}
