import { Component, OnInit } from '@angular/core';
import { articulo } from 'src/app/interfaces/articulo';
import { Router, RouterLink } from '@angular/router';
import { ArticulosService } from '../crear-articulos/articulos.service';




@Component({
  selector: 'app-articulos-especialista',
  templateUrl: './articulos-especialista.component.html',
  styleUrls: ['./articulos-especialista.component.css']
})
export class ArticulosEspecialistaComponent implements OnInit {

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

  ModificacionExpediente() {
    console.log('Crear Artículos');
    this.router.navigateByUrl('/modulo-especialistas/crear-articulos')
  }

  Ver(id:any){
    this.router.navigate(['/modulo-especialistas/ver-articulo/' + id])
  }

}
