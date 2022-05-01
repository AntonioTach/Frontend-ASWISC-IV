import { Component, OnInit } from '@angular/core';
import { ModuloEspecialistasRoutingModule } from '../modulo-especialistas-routing.module';
import { Router, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-navbar-especialista',
  templateUrl: './navbar-especialista.component.html',
  styleUrls: ['./navbar-especialista.component.css']
})
export class NavbarEspecialistaComponent implements OnInit {

  usuario = localStorage.getItem('usuario');
  nameUsuario = JSON.parse(this.usuario);

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ASWISC() {
    this.router.navigateByUrl('/modulo-especialistas');
  }

  Articulos() {
    this.router.navigateByUrl('/modulo-especialistas/articulos-especialista');
  }
  MisArticulos() {
    this.router.navigateByUrl('/modulo-especialistas/mis-articulos')
  }

  RegistrarPacientes() {
    this.router.navigateByUrl('/modulo-especialistas/registrar-paciente');
  }

  RevisarPacientes() {
    this.router.navigateByUrl('/modulo-especialistas/revisar-pacientes');
  }

  PagosPacientes() {
    this.router.navigateByUrl('/modulo-especialistas/pagos-de-pacientes');

  }

  ModificacionPrecios() {
    this.router.navigateByUrl('/modulo-especialistas/modificacion-de-precios');
  }

  AswiscAutomatizacion() {
    this.router.navigateByUrl('/modulo-especialistas/automatizacion-wisciv');
  }

  SubirPruebas() {
    this.router.navigateByUrl('/modulo-especialistas/subir-prueba');
  }

  ModificacionExpediente() {
    this.router.navigateByUrl('/modulo-especialistas/modificacion-expediente');
  }

  ElementosTerapia() {
    this.router.navigateByUrl('/modulo-especialistas/elementos-de-terapia');
  }

  Horarios() {
    this.router.navigateByUrl('/modulo-especialistas/horarios');
  }

  Baja() {
    this.router.navigateByUrl('/modulo-especialistas/baja');
  }

  Nombre() {
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
