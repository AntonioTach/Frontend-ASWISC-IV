import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarPacienteService } from './navbar-paciente.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar-pacientes',
  templateUrl: './navbar-pacientes.component.html',
  styleUrls: ['./navbar-pacientes.component.css']
})
export class NavbarPacientesComponent implements OnInit {

  usuario = localStorage.getItem('usuario');
  nameUsuario = JSON.parse(this.usuario);

  constructor(private router: Router, public navbarPacienteService:NavbarPacienteService, private _snackBar: MatSnackBar) { }

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
    localStorage.getItem("id_usuario")

    this.navbarPacienteService.watchPacienteEspecialista().subscribe(
      (res:any) => {
        console.log(res)

        if(res.idEspecialista != null)
          this.router.navigateByUrl('/modulo-pacientes/horarios-disponibles');
        else
        this._snackBar.open('Primero debes tener asignado un especilista', '', {
          duration: 5000, //5s
          panelClass: "red",
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      }, err => console.log(err)
    )
    
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
