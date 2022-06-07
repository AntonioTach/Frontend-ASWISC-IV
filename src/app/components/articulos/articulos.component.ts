import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ArticulosService } from '../modulo-especialistas/crear-articulos/articulos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

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
    })
  }


  Ver(id: any){
    this.router.navigate(['/ver-articulo/' + id])
  }

}
