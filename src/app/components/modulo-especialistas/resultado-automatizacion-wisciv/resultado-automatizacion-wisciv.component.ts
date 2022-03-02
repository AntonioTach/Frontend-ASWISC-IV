import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutomatizacionWiscivService } from '../automatizacion-wisciv/automatizacion-wisciv.service';
//import { Chart } from 'node_modules/chart.js'

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
    //Recibiento de informacion de ASWISC-IV, componente de automatizacion
    this.automatizacion.disparadorDatos.subscribe(
        dataEntrante => {
        console.log("Recibiendo data", dataEntrante);
        this.dataWISC=dataEntrante;
        console.log(this.dataWISC);
        this.keys=Object.keys(dataEntrante.data);
        // this.dataWISC=dataEntrante.data;
        // this.keys=Object.keys(dataEntrante.data);
        // console.log("keys",this.keys);
      }
    )


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
