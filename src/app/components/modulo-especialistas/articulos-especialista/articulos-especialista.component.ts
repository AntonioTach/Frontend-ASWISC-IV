import { Component, OnInit } from '@angular/core';
import { articulo } from 'src/app/interfaces/articulo';
import { Router, RouterLink } from '@angular/router';

export interface PeriodicElement {//interfaz
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: articulo[] = [//array de elementos
  {titulo:'Hydrogen', nombre: 'Hydrogen', fecha: 'Hydrogen'},
  {titulo:'Hydrogen', nombre: 'Hydrogen', fecha: 'Hydrogen'},
  {titulo:'Hydrogen', nombre: 'Hydrogen', fecha: 'Hydrogen'},
  
];

@Component({
  selector: 'app-articulos-especialista',
  templateUrl: './articulos-especialista.component.html',
  styleUrls: ['./articulos-especialista.component.css']
})
export class ArticulosEspecialistaComponent implements OnInit {

  displayedColumns: string[] = ['titulo', 'nombre', 'fecha', 'acciones'];//columnas
  dataSource = ELEMENT_DATA;


  applyFilter(event: Event) {
    
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ModificacionExpediente(){
    console.log('Crear Artículos');
    this.router.navigateByUrl('/modulo-especialistas/crear-articulos')
  }

}
