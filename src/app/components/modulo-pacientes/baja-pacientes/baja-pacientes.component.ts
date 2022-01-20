import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import  Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyServiceEliminarpacienteService } from './my-serviceEliminarpaciente.service';


@Component({
  selector: 'app-baja-pacientes',
  templateUrl: './baja-pacientes.component.html',
  styleUrls: ['./baja-pacientes.component.css']
})
export class BajaPacientesComponent implements OnInit {
  usuario = localStorage.getItem('usuario');
  id_usuario = localStorage.getItem('id_usuario');        //Identificar el id_usuario

  constructor(private router:Router, private EliminarPacienteService: MyServiceEliminarpacienteService, private _snackBar: MatSnackBar) { }

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
      if(result.isConfirmed){
        //Proceso para eliminar en backend
        this.EliminarPacienteService.DeletePaciente(this.id_usuario).subscribe(
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
        //Otro sweet alert??
        //eliminar token y datos
        //direccionar a inicio
      }
    })
  }

}
