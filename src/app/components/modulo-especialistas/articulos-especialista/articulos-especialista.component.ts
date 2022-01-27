import { Component, OnInit, ViewChild } from '@angular/core';
import { articulo } from 'src/app/interfaces/articulo';
import { Router, RouterLink } from '@angular/router';
import { ArticulosService } from '../crear-articulos/articulos.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-articulos-especialista',
  templateUrl: './articulos-especialista.component.html',
  styleUrls: ['./articulos-especialista.component.css']
})
export class ArticulosEspecialistaComponent implements OnInit {
  lista: any = []
  displayedColumns: string[] = ['titulo', 'nombre', 'fecha', 'acciones'];//columnas
  dataSource = new MatTableDataSource(this.lista);

  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private router: Router, private articulos: ArticulosService) { }

  ngOnInit(): void {
    this.articulos.getArticulos().subscribe(res => {
      this.lista = res;
      this.dataSource = new MatTableDataSource(this.lista);
      // this.dataSource = res;
    })
  }

  ModificacionExpediente() {
    console.log('Crear Artículos');
    this.router.navigateByUrl('/modulo-especialistas/crear-articulos')
  }

  Ver(id:any){
    this.router.navigate(['/modulo-especialistas/ver-articulo/' + id])
  }
  eliminarArticulo(){
    
  }

}
