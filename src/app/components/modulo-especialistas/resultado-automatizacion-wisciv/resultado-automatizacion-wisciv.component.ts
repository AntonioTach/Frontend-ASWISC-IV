import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AutomatizacionWiscivService } from '../automatizacion-wisciv/automatizacion-wisciv.service';
//import { Chart } from 'node_modules/chart.js'

declare var google: any;

@Component({
  selector: 'app-resultado-automatizacion-wisciv',
  templateUrl: './resultado-automatizacion-wisciv.component.html',
  styleUrls: ['./resultado-automatizacion-wisciv.component.css']
})
export class ResultadoAutomatizacionWiscivComponent implements OnInit {
  //Declaration
  EspecialistaNombre: any;
  PacienteNacimiento: any;
  PacienteNombre: any;
  aritmetica: any;
  busqueda_simbolos: any;
  claves: any;
  comprension: any;
  comprension_verbal: any;
  conceptos: any;
  cubos: any;
  digitos: any;
  escala_total: any;
  fecha_evaluacion: any;
  figuras_incompletas: any;
  informacion: any;
  letras_numeros: any;
  matrices: any;
  memoria_de_trabajo: any;
  pistas: any;
  puntuacion_media_comprension_verbal : any;
  puntuacion_media_comprension_verbal_2 : any;
  puntuacion_media_subprueba: any;
  razonamiento_perceptual : any;
  registros: any;
  semejanzas: any;
  velocidad_de_procesamiento: any;
  vocabulario: any;
  //FECHAS
  fechaEvaluacionMonth: any;
  fechaEvaluacionYear: any;
  fechaEvaluacionday: any;
  fechaEvaluacionYearInt: any;
  fechaEvaluacionMonthInt: any;
  fechaEvaluaciondayInt: any;

  fechaPacienteYear: any;
  fechaPacienteYearInt: any;
  fechaPacienteMonth: any;
  fechaPacienteMonthInt: any;
  fechaPacienteDayInt: any;
  fechaPacienteDay: any;
  //INDICES
  indiceCubos: any;
  indiceSemejanzas: any;
  indiceDigitos: any;
  indiceConceptos: any;
  indiceClaves: any;
  indiceVocabulario: any;
  indiceLetrasNumeros: any;
  indiceMatrices: any;
  indiceComprension: any;
  indiceBusquedaSimbolos: any;
  indiceFigurasIncompletas: any;
  indiceRegistros: any;
  indiceInformacion: any;
  indiceAritmetica: any;
  indicePistas: any;
  //SUMA DE INDICES
  sumaCol1: any;
  sumaCol2: any;
  sumaCol3: any;
  sumaCol4: any;
  sumaCol5: any;
  //INDICES COMPUESTOS
  ICC: any;
  ICR: any;
  ICM: any;
  ICV: any;
  ICE: any;
  //RANGOS PERCEPTIL
  RPC: any;
  RPR: any;
  RPM: any;
  RPV: any;
  RPE: any;
  //INTERVALOS DE CONFIANZA
  IDCC: any;
  IDCR: any;
  IDCM: any;
  IDCV: any;
  IDCE: any;
  constructor(private automatizacion : AutomatizacionWiscivService, private router: ActivatedRoute) { }
  public dataWISC:Array<any> = [];
  keys: any;
  ngOnInit(): void {

    this.grafica1();
    this.grafica2();



    this.router.params.subscribe(res => {
      const id_ASWISC : string | any = localStorage.getItem('id_ASWISC');

      this.automatizacion.getDatos(id_ASWISC).subscribe(res => {
        const obj = res[0];
        this.EspecialistaNombre = obj.EspecialistaNombre;
        this.PacienteNacimiento = obj.PacienteNacimiento;
        this.PacienteNombre = obj.PacienteNombre;
        this.aritmetica = obj.aritmetica;
        this.busqueda_simbolos = obj.busqueda_simbolos;
        this.claves = obj.claves;
        this.comprension = obj.comprension;
        this.comprension_verbal = obj.comprension_verbal;
        this.conceptos = obj.conceptos;
        this.cubos = obj.cubos;
        this.digitos = obj.digitos;
        this.escala_total = obj.escala_total;
        this.fecha_evaluacion = obj.fecha_evaluacion;
        this.figuras_incompletas = obj.figuras_incompletas;
        this.informacion = obj.informacion;
        this.letras_numeros = obj.letras_numeros;
        this.matrices = obj.matrices;
        this.memoria_de_trabajo = obj.memoria_de_trabajo;
        this.pistas = obj.pistas;
        this.puntuacion_media_comprension_verbal  = obj.puntuacion_media_comprension_verbal;
        this.puntuacion_media_comprension_verbal_2  = obj.puntuacion_media_comprension_verbal_2;
        this.puntuacion_media_subprueba = obj.puntuacion_media_subprueba;
        this.razonamiento_perceptual  = obj.razonamiento_perceptual;
        this.registros = obj.registros;
        this.semejanzas = obj.semejanzas;
        this.velocidad_de_procesamiento = obj.velocidad_de_procesamiento;
        this.vocabulario = obj.vocabulario;
        this.cubos = obj.cubos;

        this.fechaEvaluacionYear = (this.fecha_evaluacion.substring(0, 4))
        this.fechaEvaluacionYearInt = 1 * this.fechaEvaluacionYear;

        this.fechaEvaluacionMonth = (this.fecha_evaluacion.substring(5, 7))
        this.fechaEvaluacionMonthInt = 1 * this.fechaEvaluacionMonth;

        this.fechaEvaluacionday = (this.fecha_evaluacion.substring(8, 10))
        this.fechaEvaluaciondayInt = 1 * this.fechaEvaluacionday;

        this.fechaPacienteYear = (this.PacienteNacimiento.substring(0, 4))
        this.fechaPacienteYearInt = 1 * this.fechaPacienteYear;

        this.fechaPacienteMonth = (this.PacienteNacimiento.substring(5, 7))
        this.fechaPacienteMonthInt = 1 * this.fechaPacienteMonth;

        this.fechaPacienteDay = (this.PacienteNacimiento.substring(8, 10))
        this.fechaPacienteDayInt = 1 * this.fechaPacienteDay;

        this.indiceCubos = obj.indiceCubos;
        this.indiceSemejanzas = obj.indiceSemejanzas;
        this.indiceDigitos = obj.indiceDigitos;
        this.indiceConceptos = obj.indiceConceptos;
        this.indiceClaves = obj.indiceClaves;
        this.indiceVocabulario = obj.indiceVocabulario;
        this.indiceLetrasNumeros = obj.indiceLetrasNumeros;
        this.indiceMatrices = obj.indiceMatrices;
        this.indiceComprension = obj.indiceComprension;
        this.indiceBusquedaSimbolos = obj.indiceBusquedaSimbolos;
        this.indiceFigurasIncompletas = obj.indiceFigurasIncompletas;
        this.indiceRegistros = obj.indiceRegistros;
        this.indiceInformacion = obj.indiceInformacion;
        this.indiceAritmetica = obj.indiceAritmetica;
        this.indicePistas = obj.indicePistas;

        this.sumaCol1 = this.indiceSemejanzas + this.indiceVocabulario + this.indiceComprension + this.indiceInformacion + this.indicePistas;

        this.sumaCol2 = this.indiceCubos + this.indiceConceptos + this.indiceMatrices + this.indiceFigurasIncompletas;

        this.sumaCol3 = this.indiceDigitos + this.indiceLetrasNumeros + this.indiceAritmetica;

        this.sumaCol4 = this.indiceClaves + this.indiceBusquedaSimbolos + this.indiceRegistros;

        this.sumaCol5 = this.indiceCubos + this.indiceSemejanzas + this.indiceDigitos + this.indiceConceptos + this.indiceClaves + this.indiceVocabulario + this.indiceLetrasNumeros + this.indiceMatrices + this.indiceComprension + this.indiceBusquedaSimbolos;


        this.ICC = Math.floor(Math.random() * (130 - 55 + 1)) + 55;
        this.ICR = Math.floor(Math.random() * (144 - 70 + 1)) + 70;
        this.ICM = Math.floor(Math.random() * (110 - 60 + 1)) + 60;
        this.ICV = Math.floor(Math.random() * (90 - 55 + 1)) + 55;
        this.ICE = Math.floor(Math.random() * (120 - 55 + 1)) + 55;
        // // this.fechaEvaluacionDate = new Date(this.fecha_evaluacion, "YYYY-MM-DD");
      })
      // this.service.getTarea(id).subscribe(res => {
      //   const obj = res[0];
      //   this.titulo = obj.titulo;
      //   this.comentarios = obj.descripcion;
      //   this.url = obj.documento;
      // })
    })
    //Recibiento de informacion de ASWISC-IV, componente de automatizacion
    // this.automatizacion.disparadorDatos.subscribe(
    //     dataEntrante => {
    //     console.log("Recibiendo data", dataEntrante);
    //     this.dataWISC=dataEntrante;
    //     console.log(this.dataWISC);
    //     this.keys=Object.keys(dataEntrante.data);
    //     //Promesas
    //     // this.dataWISC=dataEntrante.data;
    //     // this.keys=Object.keys(dataEntrante.data);
    //     // console.log("keys",this.keys);
    //   }
    // )

  }


  grafica1(){
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(() =>{
          var data = google.visualization.arrayToDataTable([
            ['Puntuaciones', 'Puntuaciones Escalares'],
            ['SE',  this.indiceSemejanzas],
            ['VB',  this.indiceVocabulario],
            ['CM',  this.indiceComprension],
            ['(IN)',  this.indiceInformacion],
            ['(PC)',  this.indicePistas],
            ['DC',  this.indiceCubos],
            ['CD',  this.indiceConceptos],
            ['MT',  this.indiceMatrices],
            ['(FI)',  this.indiceFigurasIncompletas],
            ['RD',  this.indiceDigitos],
            ['NL',  this.indiceLetrasNumeros],
            ['(AR)',  this.indiceAritmetica],
            ['CL',  this.indiceClaves],
            ['BS',  this.indiceBusquedaSimbolos],
            ['(RG)',  this.indiceRegistros]
          ]);

          var options = {
            title: 'Perfil de puntuaciones escalares de subprueba',
            // curveType: 'function',
            legend: { position: 'bottom' },
            // width: 600,
            // height: 500,
            backgroundColor: 'transparent'
          };

          var chart = new google.visualization.LineChart(document.getElementById('grafica1'));

          chart.draw(data, options);
      });

  }

  grafica2(){
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(() =>{
          var data = google.visualization.arrayToDataTable([
            ['Puntuaciones', 'Puntuaciones Compuestas'],
            ['ICV',  this.ICC],
            ['IRP',  this.ICR],
            ['IMT',  this.ICM],
            ['IVP',  this.ICV],
            ['CIT',  this.ICE]
          ]);

          var options = {
            title: 'Perfil de puntuaciones compuestas',
            legend: { position: 'bottom' },
            backgroundColor: 'transparent'
          };

          var chart = new google.visualization.LineChart(document.getElementById('grafica2'));

          chart.draw(data, options);
      });

  }



}
