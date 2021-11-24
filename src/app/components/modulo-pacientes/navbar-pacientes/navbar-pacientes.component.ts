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
    this.router.navigateByUrl('/modulo-especialistas');
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
    this.router.navigateByUrl('/modulo-especialistas/registrar-paciente');

  }

  RevisarPacientes(){
    console.log('Revisar Pacientes');
    this.router.navigateByUrl('/modulo-especialistas/revisar-pacientes');
  }

  PagosPacientes(){
    console.log('Pagos Pacientes');
    this.router.navigateByUrl('/modulo-especialistas/pagos-de-pacientes');

  }

  ModificacionPrecios(){
    console.log('Modificacion de Precios');
    this.router.navigateByUrl('/modulo-especialistas/modificacion-de-precios');
  }

  AswiscAutomatizacion(){
    console.log('ASWISC Automatizar prueba WISC-IV');
    this.router.navigateByUrl('/modulo-especialistas/automatizacion-wisciv');
  }

  SubirPruebas(){
    console.log('Subir Pruebas');
    this.router.navigateByUrl('/modulo-especialistas/subir-prueba');
  }

  ModificacionExpediente(){
    console.log('Modificacion Expediente');
    this.router.navigateByUrl('/modulo-especialistas/modificacion-expediente');
  }

  ElementosTerapia(){
    console.log('Elementos de Terapia');
    this.router.navigateByUrl('/modulo-especialistas/elementos-de-terapia');
  }

  Horarios(){
    console.log('Horarios');
    this.router.navigateByUrl('/modulo-especialistas/horarios');
  }

  Baja(){
    console.log('Baja');
    this.router.navigateByUrl('/modulo-especialistas/baja');
  }

  Nombre(){
    console.log('Nombre Especialista');
    this.router.navigateByUrl('/modulo-especialistas/nombre');
  }

  btnLogout(){
    //console.log('Logout');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');

  }

}
