import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre-paciente',
  templateUrl: './nombre-paciente.component.html',
  styleUrls: ['./nombre-paciente.component.css']
})
export class NombrePacienteComponent implements OnInit {
  
  usuario = localStorage.getItem('usuario');
  id_tipo= localStorage.getItem('id_tipo');
  constructor() { }

  ngOnInit(): void {
  }
  confirmarCambio(){

  }

}
