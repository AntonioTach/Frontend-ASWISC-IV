import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

import { MyServiceNombrePacienteService } from './my-service-NombrePaciente.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-nombre-paciente',
  templateUrl: './nombre-paciente.component.html',
  styleUrls: ['./nombre-paciente.component.css']
})
export class NombrePacienteComponent implements OnInit {


  id_usuario= localStorage.getItem('id_usuario');
   // public FormRegistrarPaciente!: FormGroup;
 public FormModificarNombre! : FormGroup;
 nombre: any;
 nacimiento: any;
 email: any;
 contrasena: any;
 usuario: any;
 paciente: any = [];

 edit: boolean = false;
 constructor(
   private NombrePService: MyServiceNombrePacienteService ,
   private formBuilder: FormBuilder,
   private _snackBar: MatSnackBar, 
   private router: Router
  ) { }

 telefono: any = null;
 hide = true;
 sexo: string | undefined;
 sexos: string[] = ['Masculino', 'Femenino'];


 ngOnInit(): void {
   this.cargarPaciente();
   this.FormModificarNombre = this.formBuilder.group({
    usuario: [{value: '', }, [Validators.required]],
    nombre: [{value: '',},[Validators.required]],
    nacimiento: [{value: '', disabled: true}, [Validators.required]],
    email: [{value: '',},[Validators.required]],
    contrasena: [{value: '',}, [Validators.required]],
    telefono: [{value: '',}, [Validators.required]],
    sexo: [{value: '', disabled: true}, [Validators.required]],
   });
 }

 cargarPaciente(){
  this.NombrePService.getPaciente(this.id_usuario).subscribe((res:any) => {
    var obj = res[0]
    console.log(obj);
    this.sexo = obj.sexo;
    this.usuario = obj.usuario;
    this.nombre = obj.nombre;
    this.nacimiento = obj.nacimiento;
    this.email = obj.email;
    this.telefono = obj.telefono;
    this.contrasena = obj.contrasena;
    this.FormModificarNombre.patchValue(obj)
    // this.usuario = this.FormModificarNombre.value['usuario'];
    // this.nombre = this.FormModificarNombre.value['nombre'];
    // this.nacimiento = this.FormModificarNombre.value['nacimiento'];
    // this.correo = this.FormModificarNombre.value['correo'];
    // this.contrasena = this.FormModificarNombre.value['contrasena'];
    // this.telefono = this.FormModificarNombre.value['telefono'];
  }, err => console.log(err)
  )
 }

 capturar() {
  if (this.FormModificarNombre.invalid) {
    return
  }
  else {
    console.log(this.FormModificarNombre?.value);
    // this.RegistradoMensaje();
    console.log(this.FormModificarNombre.value);
    this.NombrePService.updatePaciente(this.id_usuario, this.FormModificarNombre.getRawValue())
    .pipe(
      finalize(() => {
        this.cargarPaciente()
        this._snackBar.open('Actulizado correctamente.', '', { duration: 3000 })
      })
    )
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err)
        this._snackBar.open('Ha habio un error.', '', { duration: 3000 })
      }
    )
  }
}




}
