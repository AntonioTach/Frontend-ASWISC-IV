import { Component, OnInit } from '@angular/core';
import { EspecialistasService } from './especialistas.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrarse-con-especialista',
  templateUrl: './registrarse-con-especialista.component.html',
  styleUrls: ['./registrarse-con-especialista.component.css']
})
export class RegistrarseConEspecialistaComponent implements OnInit {
  listaEspecialistas: any = [];
  constructor(private especialistas: EspecialistasService ,private router:Router) { }

  ngOnInit(): void {
    this.cargarEspecialistas();
  }

  cargarEspecialistas() {
    this.especialistas.getEspecialistas().subscribe(res => this.listaEspecialistas = res, err => console.log(err));
  }

  vista(){
    console.log("Vista");
    this.router.navigateByUrl('/modulo-pacientes/vista-especialista');
  }
}
