import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import  Swal from 'sweetalert2';


@Component({
  selector: 'app-baja-pacientes',
  templateUrl: './baja-pacientes.component.html',
  styleUrls: ['./baja-pacientes.component.css']
})
export class BajaPacientesComponent implements OnInit {
  usuario = localStorage.getItem('usuario');

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 confirmarBaja(){
    Swal.fire({
      title: 'Confirmar baja del sistema',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#B22222',
      confirmButtonText: 'Dar de baja'
    }).then((result) => {
      if(result.isConfirmed){
        //Proceso para eliminar en backend
        //Otro sweet alert??
        //eliminar token y datos
        //direccionar a inicio
      }
    })
  }

}
