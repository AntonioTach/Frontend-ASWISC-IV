import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ModificacionExpedienteServiceService } from '../modificacion-expediente/modificacion-expediente-service.service';
import { ServiceRevisarPacienteService } from '../revisar-paciente/service-revisar-paciente.service';
import * as jspdf from 'jspdf-autotable';
import jsPDF from 'jspdf'
import * as html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas'

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
    // Extraemos el
    console.log('si sirvo');
    const DATA = document.getElementById('registro');
    const doc = new jsPDF('p', 'pt', 'a2');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      // Add image Canvas to PDF
      const bufferX = 40;
      const bufferY = 40;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${this.usuario}.pdf`);
    });
  }

}


