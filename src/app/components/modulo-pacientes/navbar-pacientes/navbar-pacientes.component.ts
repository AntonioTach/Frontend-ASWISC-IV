import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-pacientes',
  templateUrl: './navbar-pacientes.component.html',
  styleUrls: ['./navbar-pacientes.component.css']
})
export class NavbarPacientesComponent implements OnInit {

  usuario = localStorage.getItem('usuario');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ASWISC() {
    this.router.navigateByUrl('/modulo-pacientes');
  }

  MiEspecialista() {
    this.router.navigateByUrl('/modulo-pacientes/mi-especialista');
  }
  RegistrarseConEspecialista() {
    this.router.navigateByUrl('/modulo-pacientes/registrarse-con-especialista')
  }

  Articulos() {
    this.router.navigateByUrl('/modulo-pacientes/articulos-pacientes');
  }

  HorariosDisponibles() {
    this.router.navigateByUrl('/modulo-pacientes/horarios-disponibles');
  }

  Pruebas() {
    this.router.navigateByUrl('/modulo-pacientes/pruebas-pacientes');
  }

  ExpedienteClinico() {
    this.router.navigateByUrl('/modulo-pacientes/expediente-pacientes');
  }


  ElementosTerapia() {
    this.router.navigateByUrl('/modulo-pacientes/elementos-de-terapia-pacientes');
  }

  Baja() {
    this.router.navigateByUrl('/modulo-pacientes/baja-pacientes');
  }

  Pagos() {
    this.router.navigateByUrl('/modulo-pacientes/pagos-pacientes');
  }

  Nombre() {
    this.router.navigateByUrl('/modulo-pacientes/nombre-paciente')
  }
  Carrito() {
    this.router.navigateByUrl('/modulo-pacientes/carrito')
  }

  btnLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id_tipo');
    localStorage.removeItem('id_usuario');
    this.router.navigateByUrl('/login');
  }
}
