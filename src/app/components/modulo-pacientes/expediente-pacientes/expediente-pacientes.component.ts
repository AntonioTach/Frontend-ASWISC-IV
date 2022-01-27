import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf-autotable';
import jsPDF from 'jspdf'
import * as html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-expediente-pacientes',
  templateUrl: './expediente-pacientes.component.html',
  styleUrls: ['./expediente-pacientes.component.css']
})
export class ExpedientePacientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
