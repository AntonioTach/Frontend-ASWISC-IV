import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutomatizacionWiscivService } from '../automatizacion-wisciv/automatizacion-wisciv.service';
//import { Chart } from 'node_modules/chart.js'

declare var google: any;

@Component({
  selector: 'app-resultado-automatizacion-wisciv',
  templateUrl: './resultado-automatizacion-wisciv.component.html',
  styleUrls: ['./resultado-automatizacion-wisciv.component.css']
})
export class ResultadoAutomatizacionWiscivComponent implements OnInit {

  constructor(private router : Router, private automatizacion : AutomatizacionWiscivService) { }
  public dataWISC:Array<any> = [];
  keys: any;
  ngOnInit(): void {
    console.log("prueba")
    this.grafica1();
    this.grafica2();
    //Recibiento de informacion de ASWISC-IV, componente de automatizacion
    this.automatizacion.disparadorDatos.subscribe(
        dataEntrante => {
        console.log("Recibiendo data", dataEntrante);
        this.dataWISC=dataEntrante;
        console.log(this.dataWISC);
        this.keys=Object.keys(dataEntrante.data);
        //Promesas
        // this.dataWISC=dataEntrante.data;
        // this.keys=Object.keys(dataEntrante.data);
        // console.log("keys",this.keys);
      }
    )

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
