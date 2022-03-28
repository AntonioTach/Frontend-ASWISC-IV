import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'app-modificar-tarea',
  templateUrl: './modificar-tarea.component.html',
  styleUrls: ['./modificar-tarea.component.css']
})


export class ModificarTareaComponent implements OnInit {

  public FormTarea!: FormGroup;

  usuario: string = '';
  id: any = null;//este seria la id des paciente

  pacientes: any = []

  urlImage: any;
  @ViewChild('document') document: ElementRef;

  constructor(private formBuilder: FormBuilder, private modificarExpedienteService: ModificacionExpedienteServiceService, private _snackBar: MatSnackBar, private router: Router, private serviceRevisar: ServiceRevisarPacienteService, private firebase: AngularFireStorage, private subirservice: SubirPruebaService, private Router: ActivatedRoute) {
    // this.Router.params.subscribe(res => {
    //   this.id = res['id'];
    //   this.subirservice.getTarea(this.id).subscribe((res:any) => {
    //     this.tarea = res[0];
    //     this.titulo = this.tarea.titulo;
    //     this.descripcion = this.tarea.descripcion;
    //   })
    // })
   }

  tarea: any;
  titulo: any = '';
  descripcion: any = '';
  documento: any = '';
  id_paciente: any;
  tareas: any;
  ngOnInit(): void {
    this.cargarTarea();
    this.FormTarea = this.formBuilder.group({
      id_paciente: [this.tareas.id_paciente],
      titulo: [this.tarea.titulo, [Validators.required, Validators.maxLength(20)]],
      descripcion: [this.tareas.descripcion, [Validators.required, Validators.maxLength(100)]],
      documento: [this.tareas.documento],
    })
  }

  cargarTarea(){
     this.Router.params.subscribe(res => {
      this.id = res['id'];
      this.subirservice.getTarea(this.id).subscribe((res:any) => {
        var tarea = res[0];
        this.id_paciente = this.tarea.id_paciente
        this.titulo = this.tarea.titulo
        this.descripcion = this.tarea.descripcion
        this.documento = this.tarea.documento
        console.log(this.tarea);
        this.FormTarea.patchValue(tarea);
      })
    })
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
    const filePath = `Tareas/${id}`;////se genera la ruta
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
      this.router.navigateByUrl('/modulo-especialistas/elementos-de-terapia');
    }
  }

  RegistradoMensaje() {
    this._snackBar.open('Tarea Registrada Correctamente', '', {
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
