import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ModificacionExpedienteServiceService } from '../modificacion-expediente/modificacion-expediente-service.service';
import { ServiceRevisarPacienteService } from '../revisar-paciente/service-revisar-paciente.service';
//import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-descargar-expediente',
  templateUrl: './descargar-expediente.component.html',
  styleUrls: ['./descargar-expediente.component.css']
})
export class DescargarExpedienteComponent implements OnInit {

  fecha: any;
  obsevacion: any;
  estudios: any;
  origen: any;
  ocupacion: any;

  constructor(private modificarExpedienteService: ModificacionExpedienteServiceService, private _snackBar: MatSnackBar, private router: ActivatedRoute, private serviceRevisar: ServiceRevisarPacienteService) { }

  usuario: string = '';
  correo: string = '';
  telefono: any = null;

  hide = true;
  sexo: string | undefined;
  sexos: string[] = ['Masculino', 'Femenino'];
  id_paciente = 0
  pacientes: any = []
  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.id_paciente = res['id'];
      this.cargarInformacion();
    })

  }
  cargarInformacion() {
    console.log(this.id_paciente);
    this.modificarExpedienteService.getPaciente(this.id_paciente.toString()).subscribe((res: any) => {
      var obj = res[0]
      console.log(obj);
      this.usuario = obj.nombre;
      this.telefono = obj.telefono;
      this.fecha = obj.nacimiento;
      this.correo = obj.email;
      this.sexo = obj.sexo;
      this.obsevacion = obj.observaciones;
      this.estudios = obj.estudios;
      this.origen = obj.origen;
      this.ocupacion = obj.ocupacion;
    }, err => console.log(err))
  }
  cargarPacientes() {
    this.serviceRevisar.getPacientes().subscribe((res) => {
      this.pacientes = res;
    }, err => console.log(err))
  }
  RegistradoMensaje() {
    this._snackBar.open('Registro Correcto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  capturar() {

    
    /*
    const options = {
      name: `${this.usuario}.pdf `,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    }
    html2canvas().from(element).set(opt).save();
  }*/
  }

}
function html2pdf() {
  throw new Error('Function not implemented.');
}

