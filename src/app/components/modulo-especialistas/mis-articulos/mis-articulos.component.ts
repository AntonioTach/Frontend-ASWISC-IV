import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ArticulosService } from '../crear-articulos/articulos.service';
import { MisArticulosService } from './mis-articulos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mis-articulos',
  templateUrl: './mis-articulos.component.html',
  styleUrls: ['./mis-articulos.component.css'],
})
export class MisArticulosComponent implements OnInit {
  lista: any = []
  displayedColumns: string[] = ['titulo', 'nombre', 'fecha', 'acciones']; //columnas
  dataSource: any = [];

  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private router: Router,
    private articulos: ArticulosService,
    private articulosService: MisArticulosService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.traerArticulos()
  }

  traerArticulos(): void {
    this.articulos.getMisArticulos().subscribe((res) => {
      this.lista = res;
      this.dataSource = new MatTableDataSource(this.lista);
    });
  }

  ModificacionExpediente() {
    console.log('Crear Artículos');
    this.router.navigateByUrl('/modulo-especialistas/crear-articulos');
  }
  modificar(id: any) {
    this.router.navigate(['/modulo-especialistas/modificar-articulo/' + id]);
  }
  eliminarArticulo(id: string): void {
    if (
      confirm(
        'Seguro que desea eliminar el articulo?. Dejará de pertenecer a su lista de articulos.'
      ) == true
    ) {
      this.articulosService.eliminarArticulo(id).subscribe(
        (res) => {
          console.log(res);
          this.traerArticulos()
        },
        (err) => console.log(err)
      );
      this._snackBar.open('El atiuculo fue eliminado con exito', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
}
