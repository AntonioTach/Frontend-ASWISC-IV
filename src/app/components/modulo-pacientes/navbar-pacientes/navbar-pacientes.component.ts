import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-pacientes',
  templateUrl: './navbar-pacientes.component.html',
  styleUrls: ['./navbar-pacientes.component.css']
})
export class NavbarPacientesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ASWISC(){
    console.log('ASWISC-IV');
    this.router.navigateByUrl('/modulo-pacientes');
  }

  MiEspecialista(){
    console.log('Mi Especialista');
    this.router.navigateByUrl('/modulo-pacientes/mi-especialista');
  }
  RegistrarseConEspecialista(){
    console.log('Registrarse Con Especialistas');
    this.router.navigateByUrl('/modulo-pacientes/registrarse-con-especialista')
  }

  Articulos(){
    console.log("Registrar pacientes");
    this.router.navigateByUrl('/modulo-pacientes/articulos-pacientes');

  }

  HorariosDisponibles(){
    console.log('Horarios Disponibles');
    this.router.navigateByUrl('/modulo-pacientes/horarios-disponibles');
  }

  Pruebas(){
    console.log('Pruebas');
    this.router.navigateByUrl('/modulo-pacientes/pruebas-pacientes');

  }

  ExpedienteClinico(){
    console.log('Expediente Clinico');
    this.router.navigateByUrl('/modulo-pacientes/expediente-pacientes');
  }


  ElementosTerapia(){
    console.log('Elementos de Terapia');
    this.router.navigateByUrl('/modulo-pacientes/elementos-de-terapia-pacientes');
  }

  Baja(){
    console.log('Baja');
    this.router.navigateByUrl('/modulo-pacientes/baja-pacientes');
  }

  Pagos(){
    console.log('Pagos');
    this.router.navigateByUrl('/modulo-pacientes/pagos-pacientes');
  }

  btnLogout(){
    //console.log('Logout');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');

  }

}
