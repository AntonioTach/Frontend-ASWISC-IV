import { Component, OnInit } from '@angular/core';
import  Swal from 'sweetalert2';
import { MyServiceBajaEspecialistaService } from './my-service-baja-especialista.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent implements OnInit {

  usuario = localStorage.getItem('usuario');              //Obtener el usuario y mostrarlo en el frontend
  id_usuario = localStorage.getItem('id_usuario');        //Identificar el id_usuario



  //constructor(private EliminarEspecialistaService: MyServiceBajaEspecialistaService, private router: Router) { }
  constructor(private router: Router, private EliminarEspecialistaService: MyServiceBajaEspecialistaService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }
  mensajeBaja(){
    this._snackBar.open('Baja del Sistema Correcto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  confirmarBaja(){
    Swal.fire({
      title: 'Confirmar baja del sistema',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#B22222',
      confirmButtonText: 'Dar de baja'
    }).then((result) => {
      if(result.isConfirmed){ //Si se confirma el sweeetAlert
        //Proceso para eliminar en backend
        this.EliminarEspecialistaService.DeleteEspecialista(this.id_usuario).subscribe(
          res => {
            console.log(res); //Si se elimino correctamente el especialista en el backend se procede a:
              //eliminar token y datos
              localStorage.removeItem('token');
              localStorage.removeItem('usuario');
              localStorage.removeItem('id_tipo');
              localStorage.removeItem('id_usuario');
              //direccionar a inicio
              this.mensajeBaja();
              this.router.navigateByUrl('/login');
          },
          err => {
            console.log(err);
          }
        )
      }
    })
  }
}
