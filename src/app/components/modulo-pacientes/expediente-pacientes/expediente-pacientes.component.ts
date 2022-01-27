import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf-autotable';
import jsPDF from 'jspdf'
import * as html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas'
import { ExpedientePacientesService } from './expediente-pacientes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expediente-pacientes',
  templateUrl: './expediente-pacientes.component.html',
  styleUrls: ['./expediente-pacientes.component.css']
})
export class ExpedientePacientesComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
      usuario: new FormControl({value: '', disabled: true}, [Validators.required]),
      telefono: new FormControl({value: '', disabled: true}, [Validators.required]),
      nacimiento: new FormControl({value: '', disabled: true}, [Validators.required]),
      email: new FormControl({value: '', disabled: true}, [Validators.required]),
      sexo: new FormControl({value: '', disabled: true}, [Validators.required]),
      estudios: new FormControl({value: '', disabled: true}, [Validators.required]),
      origen: new FormControl({value: '', disabled: true}, [Validators.required]),
      ocupacion: new FormControl({value: '', disabled: true}, [Validators.required]),
      obsevacion: new FormControl({value: '', disabled: true}, [Validators.required]),
  })

  constructor(
    private expedientePacientesService: ExpedientePacientesService
  ) { }

  ngOnInit(): void {
    this.traerPaciente()
  }

  traerPaciente(): void {
    let id = localStorage.getItem('id_usuario')
    this.expedientePacientesService.getPaciente(id)
    .subscribe((res:any) => {
      console.log('resp: ', res)
      this.formulario.patchValue(res[0])
    })
  }

  capturar(): void {
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
      docResult.save(`${this.formulario.get('usuario').value}.pdf`);
    });
  }

}
