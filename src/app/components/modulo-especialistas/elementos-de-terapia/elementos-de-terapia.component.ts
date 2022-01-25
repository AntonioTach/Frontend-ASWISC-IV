import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elementos-de-terapia',
  templateUrl: './elementos-de-terapia.component.html',
  styleUrls: ['./elementos-de-terapia.component.css']
})



export class ElementosDeTerapiaComponent implements OnInit {

  lista_tareas: any = []

  displayedColumns: string[] = ['titulo', 'nombre'];
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  CrearTarea(){
    this.router.navigateByUrl('/modulo-especialistas/asignar-tarea');
  }

}
