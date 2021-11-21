import { Component, OnInit } from '@angular/core';
import { ModuloEspecialistasRoutingModule } from '../modulo-especialistas-routing.module';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar-especialista',
  templateUrl: './navbar-especialista.component.html',
  styleUrls: ['./navbar-especialista.component.css']
})
export class NavbarEspecialistaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ASWISC(){
    console.log('ASWISC-IV');
  }

  Articulos(){
    console.log('Articulos');
  }
  MisArticulos(){
    console.log('Mis Articulos');
  }

  RegistrarPacientes(){
    console.log("Registrar pacientes");
  }

  RevisarPacientes(){
    console.log('Revisar Pacientes');
  }

  PagosPacientes(){
    console.log('Pagos Pacientes');
  }

  ModificacionPrecios(){
    console.log('Modificacion de Precios');
  }

  AswiscAutomatizacion(){
    console.log('ASWISC Automatizar prueba WISC-IV');
  }

  SubirPruebas(){
    console.log('Subir Pruebas');
  }

  ModificacionExpediente(){
    console.log('Modificacion Expediente');
  }

  ElementosTerapia(){
    console.log('Elementos de Terapia');
  }

  Horarios(){
    console.log('Horarios');
  }

  Baja(){
    console.log('Baja');
  }

  Nombre(){
    console.log('Nombre Especialista');
  }

  btnLogout(){
    //console.log('Logout');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');

  }

}
