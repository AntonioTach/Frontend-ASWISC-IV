import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SubirPruebaService } from '../subir-prueba/subir-prueba.service';

@Component({
  selector: 'app-elementos-de-terapia',
  templateUrl: './elementos-de-terapia.component.html',
  styleUrls: ['./elementos-de-terapia.component.css']
})



export class ElementosDeTerapiaComponent implements OnInit {

  lista_tareas: any = []

  displayedColumns: string[] = ['titulo', 'nombre', 'acciones'];
  dataSource = new MatTableDataSource(this.lista_tareas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private router: Router, private service: SubirPruebaService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id_especialista')
    this.service.getTareasEspecialista(id.toString()).subscribe(res => {
      this.lista_tareas = res;
      this.dataSource = new MatTableDataSource(this.lista_tareas);

    })
  }

  CrearTarea() {
    this.router.navigateByUrl('/modulo-especialistas/asignar-tarea');
  }

  verTarea(id: number) {
    console.log(id);
  }

}
