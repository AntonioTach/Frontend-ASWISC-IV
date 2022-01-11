import { Component, OnInit } from '@angular/core';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent implements OnInit {

  usuario = localStorage.getItem('usuario');

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

  constructor() { }

  ngOnInit(): void {
  }

}
