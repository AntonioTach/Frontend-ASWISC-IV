import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SubirPruebaService } from '../subir-prueba/subir-prueba.service';
import { EliminarTareaService } from '../elementos-de-terapia/eliminar-tarea.service';

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

  constructor(private router: Router, private service: SubirPruebaService, private DeleteTarea: EliminarTareaService) { }

  ngOnInit(): void {
    this.ObtenerTareas();
  }

  CrearTarea() {
    this.router.navigateByUrl('/modulo-especialistas/asignar-tarea');
  }

  verTarea(id: number) {
    this.router.navigate(['/modulo-especialistas/ver-tarea/' + id.toString()]);
  }

  ObtenerTareas(){
    const id = localStorage.getItem('id_especialista')
    this.service.getTareasEspecialista(id.toString()).subscribe(res => {
      this.lista_tareas = res;
      this.dataSource = new MatTableDataSource(this.lista_tareas);
    })
  }

  eliminarTarea(id: number): void{
    if(
      confirm(
        'Seguro que desea eliminar el articulo?. Dejará de pertenecer a su lista de articulos.'
      ) == true
    ) {
      this.DeleteTarea.eliminarTarea(id).subscribe(
        (res) => {
          this.ObtenerTareas();
        },
        err => {
          console.log(err);
        }
      )
    }
  }

}
