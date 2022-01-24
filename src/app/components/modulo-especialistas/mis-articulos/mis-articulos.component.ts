import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticulosService } from '../crear-articulos/articulos.service';

@Component({
  selector: 'app-mis-articulos',
  templateUrl: './mis-articulos.component.html',
  styleUrls: ['./mis-articulos.component.css']
})
export class MisArticulosComponent implements OnInit {


  displayedColumns: string[] = ['titulo', 'nombre', 'fecha', 'acciones'];//columnas
  dataSource: any = [];


  applyFilter(event: Event) {

  }

  constructor(private router: Router, private articulos: ArticulosService) { }

  ngOnInit(): void {
    this.articulos.getMisArticulos().subscribe(res => {
      this.dataSource = res;
    })
  }

  ModificacionExpediente() {
    console.log('Crear Artículos');
    this.router.navigateByUrl('/modulo-especialistas/crear-articulos')
  }

}
