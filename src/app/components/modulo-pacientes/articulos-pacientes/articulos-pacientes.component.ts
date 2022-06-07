import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticulosService } from '../../modulo-especialistas/crear-articulos/articulos.service';

@Component({
  selector: 'app-articulos-pacientes',
  templateUrl: './articulos-pacientes.component.html',
  styleUrls: ['./articulos-pacientes.component.css']
})
export class ArticulosPacientesComponent implements OnInit {


  displayedColumns: string[] = ['titulo', 'nombre', 'fecha', 'acciones'];//columnas
  dataSource: any = [];


  applyFilter(event: Event) {

  }

  constructor(private router: Router, private articulos: ArticulosService) { }

  ngOnInit(): void {
    this.articulos.getArticulos().subscribe(res => {
      this.dataSource = res;
    })
  }

  Ver(id: any){
    this.router.navigate(['/modulo-pacientes/ver-articulo/' + id])
  }



}
