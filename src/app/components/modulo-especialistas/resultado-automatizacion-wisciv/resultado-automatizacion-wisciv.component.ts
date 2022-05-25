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

  fechaEvaluacionDate: any;
  fechaEvaluacionMonth: any;
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

        this.fechaEvaluacionDate = new Date(this.fecha_evaluacion);
        this.fechaEvaluacionMonth = this.fechaEvaluacionDate.getMonth();

        // this.fechaEvaluacionDate = new Date(this.fecha_evaluacion, "YYYY-MM-DD");
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
            ['Year', 'puntos1', 'puntos2'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
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
            ['Year', 'Sales'],
            ['2004',  1000],
            ['2005',  1170],
            ['2006',  660],
            ['2007',  1030]
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
