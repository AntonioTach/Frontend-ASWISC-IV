import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TareasService } from '../elemetos-de-terapia-pacientes/tareas.service';

@Component({
  selector: 'app-elementos-de-terapia-pacientes',
  templateUrl: './elementos-de-terapia-pacientes.component.html',
  styleUrls: ['./elementos-de-terapia-pacientes.component.css']
})
export class ElementosDeTerapiaPacientesComponent implements OnInit {
  lista_tareas: any = []

  displayedColumns: string[] = ['titulo', 'nombre', 'acciones'];
  dataSource = new MatTableDataSource(this.lista_tareas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private service: TareasService, private router: Router) { }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    const id = localStorage.getItem('id_especialista')
    this.service.getTareas().subscribe(res => {
      this.lista_tareas = res;
      this.dataSource = new MatTableDataSource(this.lista_tareas);

    })
  }

  verTarea(id: number) {
    this.router.navigate(['/modulo-pacientes/ver-tarea/' + id.toString()]);
  }


}
