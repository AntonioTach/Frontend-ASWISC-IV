import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceRevisarPacienteService } from './service-revisar-paciente.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pacientes } from 'src/app/interfaces/usuario';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';






@Component({
  selector: 'app-revisar-paciente',
  templateUrl: './revisar-paciente.component.html',
  styleUrls: ['./revisar-paciente.component.css']
})
export class RevisarPacienteComponent implements OnInit {

  lista_pacientes: any = []

  displayedColumns: string[] = ['nombre', 'nacimiento', 'precio', 'acciones'];
  dataSource = new MatTableDataSource(this.lista_pacientes);

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


  constructor(private verPacientesService: ServiceRevisarPacienteService, private router: Router, private _snackBar: MatSnackBar) {
  }

  id_usuario = localStorage.getItem('id_usuario');

  ngOnInit(): void {
    // this.verPacientes();
    this.id_usuario = localStorage.getItem('id_usuario');
    this.cargarPacientes();
  }
  cargarPacientes() {
    this.verPacientesService.getPacientes().subscribe(res => {
      this.lista_pacientes = res;
      console.log(this.lista_pacientes);
      this.dataSource = new MatTableDataSource(this.lista_pacientes);
    }, err => console.log(err)
    );
  }
  /*
  verPacientes() {

    this.verPacientesService.Pacientes(this.id_usuario).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }*/
  eliminarPaciente(index: number) {//aqui lo que abria que pasarle es el id, para borra el dato de la base de datos.
    console.log(index);
    this.verPacientesService.eliminarPaciente(index);
    this.cargarPacientes();

    this._snackBar.open('El usuario fue eliminado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  ///this.reportesService.replicarReporte(this.replicaId, this.registrarForm?.value).subscribe(

}
