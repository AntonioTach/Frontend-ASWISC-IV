import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { pagos } from 'src/app/interfaces/pagos';


const ELEMENT_DATA: pagos[] = [//array de elementos
  {nombre:'Hydrogen', monto: 'Hydrogen', fecha: 'Hydrogen'},
  {nombre:'Hydrogen', monto: 'Hydrogen', fecha: 'Hydrogen'},
  {nombre:'Hydrogen', monto: 'Hydrogen', fecha: 'Hydrogen'},
  
];
@Component({
  selector: 'app-pagos-de-pacientes',
  templateUrl: './pagos-de-pacientes.component.html',
  styleUrls: ['./pagos-de-pacientes.component.css']
})
export class PagosDePacientesComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'monto', 'fecha'];//columnas
  dataSource = ELEMENT_DATA;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  agregartarjeta(){
    console.log('Agregar Tarjeta');
    this.router.navigateByUrl('/modulo-especialistas/tarjeta');
  }

}
