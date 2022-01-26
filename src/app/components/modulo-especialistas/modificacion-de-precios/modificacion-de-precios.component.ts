import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

//Services
import { ServiceRevisarPacienteService } from '../revisar-paciente/service-revisar-paciente.service'
import { ModificacionPrecioServiceService } from './modificacion-precio-service.service';
import { ModificacionExpedienteServiceService } from '../modificacion-expediente/modificacion-expediente-service.service';

@Component({
  selector: 'app-modificacion-de-precios',
  templateUrl: './modificacion-de-precios.component.html',
  styleUrls: ['./modificacion-de-precios.component.css']
})
export class ModificacionDePreciosComponent implements OnInit {

  public FormModificarPrecio!: FormGroup;

  precio_general: string = '';
  precio_paciente: string = '';

  id_usuario = localStorage.getItem('id_usuario');
  id_paciente = 0
  pacientes: any = []

  constructor(private formBuilder: FormBuilder, private router: Router, private serviceRevisar: ServiceRevisarPacienteService, private serviceModificacionPrecion: ModificacionPrecioServiceService, private modificarExpedienteService: ModificacionExpedienteServiceService) { }

  ngOnInit(): void {
    this.cargarPrecioEspecialista();
    this.cargarPacientes();
    this.id_paciente = 0;
    this.cargarPrecio();
    this.FormModificarPrecio = this.formBuilder.group({
      precio_general: [this.precio_general, [Validators.required, Validators.maxLength(6)]],
      precio_paciente: [this.precio_paciente, [Validators.required, Validators.maxLength(6)]],
    })
  }

  cargarPrecioEspecialista(){ //Cargar Precio general del Especialista
    this.serviceModificacionPrecion.getPrecioGeneral(this.id_usuario.toString()).subscribe((res: any) => {
      var obj = res[0]
      this.precio_general = obj.precio_consulta_general;
    }, err => console.log(err))
  }

  cargarPrecio(){ //Cargar Precio General del Paciente
    this.modificarExpedienteService.getPaciente(this.id_paciente.toString()).subscribe((res:any) => {
      var obj = res[0];
      this.precio_paciente = obj.precio_consulta;
    }, err => console.log(err))
  }

  cargarPacientes(){
      this.serviceRevisar.getPacientes().subscribe((res) => {
      this.pacientes = res;
    }, err => console.log(err))
  }

  capturar(){
    if(this.FormModificarPrecio.invalid){
      return
    }
    else {
      // this.serviceModificacionPrecion.capturar(this.id_usuario.toString(), this.id_paciente.toString()).subscribe((res:any) => {

      // })
    }
  }

}
