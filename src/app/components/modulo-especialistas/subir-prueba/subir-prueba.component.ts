import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceRevisarPacienteService } from '../revisar-paciente/service-revisar-paciente.service'
import { ModificacionExpedienteServiceService } from 'src/app/components/modulo-especialistas/modificacion-expediente/modificacion-expediente-service.service'
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { SubirPruebaService } from './subir-prueba.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-subir-prueba',
  templateUrl: './subir-prueba.component.html',
  styleUrls: ['./subir-prueba.component.css']
})
export class SubirPruebaComponent implements OnInit {

  public FormModificarExpediente!: FormGroup;
  fecha: any;
  obsevacion: any;
  estudios: any;
  origen: any;
  ocupacion: any;
  urlImage: any;
  @ViewChild('document') document: ElementRef;

  constructor(private formBuilder: FormBuilder, private modificarExpedienteService: ModificacionExpedienteServiceService, private _snackBar: MatSnackBar, private router: Router, private serviceRevisar: ServiceRevisarPacienteService, private firebase: AngularFireStorage, private subirservice: SubirPruebaService) { }

  usuario: string = '';
  correo: string = '';
  telefono: any = null;

  hide = true;
  sexo: string | undefined;
  sexos: string[] = ['Masculino', 'Femenino'];

  id_usuario = localStorage.getItem('id_usuario');
  id_paciente;
  pacientes: any = []
  ngOnInit(): void {
    this.cargarPacientes();
    this.FormModificarExpediente = this.formBuilder.group({
      id_paciente: [''],
      nombre_prueba: ['', [Validators.required]],
      comentarios: ['', [Validators.required]],
      documento: [''],
    });
  }
  cargarInformacion() {
    console.log(this.id_paciente);
    this.modificarExpedienteService.getPaciente(this.id_paciente.toString()).subscribe((res: any) => {
      var obj = res[0]
      console.log(obj);
      this.usuario = obj.usuario;
      this.telefono = obj.id_paciente;
      this.fecha = obj.nacimiento;
      this.correo = obj.email;
      this.sexo = obj.sexo;
    }, err => console.log(err))
  }
  cargarPacientes() {
    this.serviceRevisar.getPacientes().subscribe((res) => {
      this.pacientes = res;
    }, err => console.log(err))
  }
  RegistradoMensaje() {
    this._snackBar.open('Registro Correcto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  RegistradoMensaje2() {
    this._snackBar.open('Registro Incompleto', '', {
      duration: 3000, //5s
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  capturar() {
    this.FormModificarExpediente.value['documento'] = this.document.nativeElement.value;
    this.FormModificarExpediente.value['id_paciente'] = this.telefono;

    console.log(this.FormModificarExpediente.invalid || this.document.nativeElement.value == undefined || this.telefono == null);
    if (this.FormModificarExpediente.invalid) {
      this.RegistradoMensaje2();
    }
    else {
      this.subirservice.postPrueba(this.FormModificarExpediente.value).subscribe(res => { console.log(res); }, err => { console.log(err); });
      this.RegistradoMensaje();
    }
  }
  file: any;
  getFile(event: any) {
    this.file = event.target.files[0];

    console.log('Archivo', this.file)
  }
  uploadFile() {
    const id = Math.random().toString(36).substring(2);//se genera un id random
    const file = this.file;//toma el primer archivo que encuentre
    const filePath = `pruebas/${id}`;////se genera la ruta
    const ref = this.firebase.ref(filePath);//le mando la ruta al servidor
    const task = this.firebase.upload(filePath, file);//mandar la imagen al servidor 
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();//tomar la url
  }

  //ya solo falta llamar a la api

}
