import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

//Services
import { ModificacionExpedienteServiceService } from 'src/app/components/modulo-especialistas/modificacion-expediente/modificacion-expediente-service.service'
import { ServiceRevisarPacienteService } from '../revisar-paciente/service-revisar-paciente.service'
import { SubirPruebaService } from '../subir-prueba/subir-prueba.service';

@Component({
  selector: 'app-asignar-tarea',
  templateUrl: './asignar-tarea.component.html',
  styleUrls: ['./asignar-tarea.component.css']
})
export class AsignarTareaComponent implements OnInit {

  public FormTarea!: FormGroup;

  usuario: string = '';
  id: any = null;//este seria la id des paciente

  id_paciente;
  pacientes: any = []

  urlImage: any;
  @ViewChild('document') document: ElementRef;

  constructor(private formBuilder: FormBuilder, private modificarExpedienteService: ModificacionExpedienteServiceService, private _snackBar: MatSnackBar, private router: Router, private serviceRevisar: ServiceRevisarPacienteService, private firebase: AngularFireStorage, private subirservice: SubirPruebaService) { }

  ngOnInit() {
    this.cargarPacientes(); //obtener los pacientes del especialista
    this.FormTarea = this.formBuilder.group({
      id_paciente: [''],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      documento: [''],
    })

  }

  cargarInformacion(){
    this.modificarExpedienteService.getPaciente(this.id_paciente.toString()).subscribe((res:any) => {
      var obj = res[0]
      console.log(obj);
      this.usuario = obj.usuario;
      this.id = obj.id_paciente;
    }, err => console.log(err))

  }

  cargarPacientes(){
    this.serviceRevisar.getPacientes().subscribe((res) => {
      this.pacientes = res;
    }, err => console.log(err))
  }

  file: any;
  //tomar el archivo
  getFile(event: any) {
    this.file = event.target.files[0];

    console.log('Archivo', this.file)
  }
  //subir el archivo
  uploadFile() {
    const id = Math.random().toString(36).substring(2);//se genera un id random
    const file = this.file;//toma el primer archivo que encuentre
    const filePath = `pruebas/${id}`;////se genera la ruta
    const ref = this.firebase.ref(filePath);//le mando la ruta al servidor
    const task = this.firebase.upload(filePath, file);//mandar la imagen al servidor
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();//tomar la url
  }

  capturar() {
    this.FormTarea.value['documento'] = this.document.nativeElement.value;
    this.FormTarea.value['id_paciente'] = this.id;

    console.log(this.FormTarea.invalid || this.document.nativeElement.value == undefined || this.id == null);
    if (this.FormTarea.invalid) {
      this.RegistradoMensaje2();
    }
    else {
      this.subirservice.postTarea(this.FormTarea.value).subscribe(res => { console.log(res); }, err => { console.log(err); });
      this.RegistradoMensaje();
    }
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

}

