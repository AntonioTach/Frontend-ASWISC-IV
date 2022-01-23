import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialistaService } from '../vista-especialista/especialista.service';

@Component({
  selector: 'app-mi-especialista',
  templateUrl: './mi-especialista.component.html',
  styleUrls: ['./mi-especialista.component.css']
})
export class MiEspecialistaComponent implements OnInit {
  id_usuario: any;
  especialista: any;
  obj: any;
  vista: number = 1;

  constructor(private especialistaService: EspecialistaService, private router: ActivatedRoute, private Router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id_usuario = localStorage.getItem('id_usuario');
    this.especialistaService.getPaciente(this.id_usuario).subscribe((res: any) => {
      this.obj = res[0];
      if (this.obj.id_especialista == undefined) {
        this.error2();
        this.Router.navigateByUrl('/modulo-pacientes/registrarse-con-especialista');

      } else {
        this.especialistaService.getEspecialista(this.obj.id_especialista).subscribe((res: any) => {
          console.log(res);
          this.especialista = res;
        })
      }

      console.log(this.vista);

    })
  }
  error2() {
    this._snackBar.open('No estas registrado con ningun especialista', '', {
      duration: 5000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  updatePaciente() {
    this.especialistaService.unsubscribePaciente(this.id_usuario).subscribe((res) => {
      console.log(res);
    }, err => console.log(err))
    this.Router.navigate(['/modulo-pacientes']);
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
