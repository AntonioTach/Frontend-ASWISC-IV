import { Component, OnInit } from '@angular/core';
import { ModuloEspecialistasRoutingModule } from '../modulo-especialistas-routing.module';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-navbar-especialista',
  templateUrl: './navbar-especialista.component.html',
  styleUrls: ['./navbar-especialista.component.css']
})
export class NavbarEspecialistaComponent implements OnInit {

  usuario = localStorage.getItem('usuario');

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ASWISC() {
    console.log('ASWISC-IV');
    this.router.navigateByUrl('/modulo-especialistas');
  }

  Articulos() {
    console.log('Articulos');
    this.router.navigateByUrl('/modulo-especialistas/articulos-especialista');
  }
  MisArticulos() {
    console.log('Mis Articulos');
    this.router.navigateByUrl('/modulo-especialistas/mis-articulos')
  }

  RegistrarPacientes() {
    console.log("Registrar pacientes");
    this.router.navigateByUrl('/modulo-especialistas/registrar-paciente');

  }

  RevisarPacientes() {
    console.log('Revisar Pacientes');
    this.router.navigateByUrl('/modulo-especialistas/revisar-pacientes');
  }

  PagosPacientes() {
    console.log('Pagos Pacientes');
    this.router.navigateByUrl('/modulo-especialistas/pagos-de-pacientes');

  }

  ModificacionPrecios() {
    console.log('Modificacion de Precios');
    this.router.navigateByUrl('/modulo-especialistas/modificacion-de-precios');
  }

  AswiscAutomatizacion() {
    console.log('ASWISC Automatizar prueba WISC-IV');
    this.router.navigateByUrl('/modulo-especialistas/automatizacion-wisciv');
  }

  SubirPruebas() {
    console.log('Subir Pruebas');
    this.router.navigateByUrl('/modulo-especialistas/subir-prueba');
  }

  ModificacionExpediente() {
    console.log('Modificacion Expediente');
    this.router.navigateByUrl('/modulo-especialistas/modificacion-expediente');
  }

  ElementosTerapia() {
    console.log('Elementos de Terapia');
    this.router.navigateByUrl('/modulo-especialistas/elementos-de-terapia');
  }

  Horarios() {
    console.log('Horarios');
    this.router.navigateByUrl('/modulo-especialistas/horarios');
  }

  Baja() {
    console.log('Baja');
    this.router.navigateByUrl('/modulo-especialistas/baja');
  }

  Nombre() {
    console.log('Nombre Especialista');
    this.router.navigateByUrl('/modulo-especialistas/nombre');
  }

  btnLogout() {
    //console.log('Logout');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id_tipo');
    localStorage.removeItem('id_especialista')
    localStorage.removeItem('id_usuario');
    this.router.navigateByUrl('/login');

  }

}
