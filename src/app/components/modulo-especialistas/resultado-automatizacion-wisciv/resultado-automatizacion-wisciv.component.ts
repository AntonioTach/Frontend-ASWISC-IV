import { Component, OnInit } from '@angular/core';
//import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-resultado-automatizacion-wisciv',
  templateUrl: './resultado-automatizacion-wisciv.component.html',
  styleUrls: ['./resultado-automatizacion-wisciv.component.css']
})
export class ResultadoAutomatizacionWiscivComponent implements OnInit {


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

  constructor() { }


  ngOnInit(): void {
//     var myChart = new Chart("myChart", {
//       type: 'bar',
//       data: {
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [{
//               label: '# of Votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               y: {
//                   beginAtZero: true
//               }
//           }
//       }
//   });
  }

}
