import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PruebasService } from './pruebas.service';

@Component({
  selector: 'app-pruebas-pacientes',
  templateUrl: './pruebas-pacientes.component.html',
  styleUrls: ['./pruebas-pacientes.component.css']
})
export class PruebasPacientesComponent implements OnInit {
  pruebas: any = []

  displayedColumns: string[] = ['titulo', 'descargar'];
  dataSource = new MatTableDataSource(this.pruebas);
  id_usuario = localStorage.getItem('id_usuario');
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private pruebasService: PruebasService, private router: Router) { }

  ngOnInit(): void {
    this.pruebasService.getPruebas(this.id_usuario.toString()).subscribe(res => {
      this.pruebas = res;
      console.log(this.pruebas);
      this.dataSource = new MatTableDataSource(this.pruebas);
    }, err => { console.log(err); })
  }
  verPrueba(id_prueba) {
    console.log(id_prueba);
    this.router.navigate(['modulo-pacientes/ver-prueba/' + id_prueba])
  }
}
