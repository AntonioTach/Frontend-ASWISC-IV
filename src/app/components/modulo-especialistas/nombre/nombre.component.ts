import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { NombreServiceService } from './nombre-service.service';
@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css'],
})
export class NombreComponent implements OnInit {
  especialista: any = [];
  hide: boolean = true;
  id_especialista: string;
  formEspecialista: FormGroup = new FormGroup({
    usuario: new FormControl([{ value: '' }, [Validators.required]]),
    nombre: new FormControl([{ value: '' }, [Validators.required]]),
    direccion: new FormControl([{ value: '' }, [Validators.required]]),
    profesion: new FormControl([{ value: '' }, [Validators.required]]),
    email: new FormControl([{ value: '' }, [Validators.required]]),
    contrasena: new FormControl([{ value: '' }, [Validators.required]]),
    tiempo_consulta: new FormControl([{ value: '' }, [Validators.required]]),
    telefono: new FormControl([{ value: '' }, [Validators.required]]),
  });

  constructor(
    private NombreService: NombreServiceService,
    private _snackBar: MatSnackBar
  ) {
    this.id_especialista = localStorage.getItem('id_usuario')
  }

  cargarEspecialista() {
    this.NombreService.getEspecialista(this.id_especialista).subscribe(
      (res: any) => {
        var obj = res[0];
        this.formEspecialista.patchValue(obj);
        console.log('data: ', this.formEspecialista.getRawValue())
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {
    this.cargarEspecialista();
  }

  capturar() {
    if (this.formEspecialista.invalid) {
      return;
    } else {
      console.log(this.formEspecialista?.value);
      // this.RegistradoMensaje();
      console.log(this.formEspecialista.value);
      this.NombreService.updateEspecilista(
        this.id_especialista,
        this.formEspecialista.getRawValue()
      )
        .pipe(
          finalize(() => {
            this.cargarEspecialista();
            this._snackBar.open('Actulizado correctamente.', '', {
              duration: 3000,
            });
          })
        )
        .subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
            this._snackBar.open('Ha habio un error.', '', { duration: 3000 });
          }
        );
    }
  }
}
