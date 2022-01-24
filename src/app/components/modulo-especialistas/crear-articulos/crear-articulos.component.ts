import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ArticulosService } from './articulos.service';
import { clearScreenDown } from 'readline';

@Component({
  selector: 'app-crear-articulos',
  templateUrl: './crear-articulos.component.html',
  styleUrls: ['./crear-articulos.component.css']
})
export class CrearArticulosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private servicio: ArticulosService) { }
  html: any = '';
  titulo: any = '';
  @ViewChild('view') lucas: ElementRef | any;
  @ViewChild('image') image: ElementRef | any;
  ngOnInit(): void {
    console.log(new Date());
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '10',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Ingrese el texto aquí',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    //no se bien que onda con eso
    /* 
    uploadUrl: 'v1/image',
    upload: (file: File) => { ... }
    uploadWithCredentials: false,
    */
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['InsertVideo', ''],
      ['']
    ]
  };
  click(numero: number) {
    console.log(this.titulo.length);
    const articulo = {
      titulo: this.titulo,
      descripcion: this.html,
      fecha_publicacion: new Date(),
      id_especialista: localStorage.getItem('id_especialista'),
    };
    if (this.html.length == 0 || this.titulo.length == 0) {
      window.alert('Inserte titulo y/o descurpcion');
    } else {
      if (numero == 1) {//sin publicar
        this.servicio.guardarArticulo(articulo).subscribe(res => { console.log(res) }, err => { console.log(err) })
        this.router.navigate(['/modulo-especialistas']);
      } else if (numero == 2) {//publicado
        console.log('object');
        this.servicio.publicarArticulo(articulo).subscribe(res => { console.log(res) }, err => { console.log(err) })
        this.router.navigate(['/modulo-especialistas']);
      }
    }
  }
  publicar() {
    const articulo = {
      titulo: this.titulo,
      descripcion: this.html,
      fecha_publicacion: new Date(),
      id_especialista: localStorage.getItem('id_especialista'),
    };
    this.servicio.publicarArticulo(articulo).subscribe(res => { console.log(res) }, err => { console.log(err) })
    this.router.navigate(['/modulo-especialistas']);
  }

}
