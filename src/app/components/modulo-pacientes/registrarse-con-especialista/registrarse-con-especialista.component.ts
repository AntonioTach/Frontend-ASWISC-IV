import { Component, OnInit } from '@angular/core';
import { EspecialistasService } from './especialistas.service';

@Component({
  selector: 'app-registrarse-con-especialista',
  templateUrl: './registrarse-con-especialista.component.html',
  styleUrls: ['./registrarse-con-especialista.component.css']
})
export class RegistrarseConEspecialistaComponent implements OnInit {
  listaEspecialistas: any = [];
  constructor(private especialistas: EspecialistasService) { }

  ngOnInit(): void {
    this.cargarEspecialistas();
  }

  cargarEspecialistas() {
    this.especialistas.getEspecialistas().subscribe(res => this.listaEspecialistas = res, err => console.log(err));
  }
}
