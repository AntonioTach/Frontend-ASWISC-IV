import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ArticulosService } from '../crear-articulos/articulos.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private servicio: ArticulosService, private Router: ActivatedRoute) {
    this.Router.params.subscribe(res => {
      this.id = res['id'];
      this.servicio.getArticulo(this.id).subscribe((res: any) => {
        this.articulo = res[0];
        this.html = this.articulo.descripcion;
        this.titulo = this.articulo.titulo;
        this.tipo = this.articulo.estado_articulo;
        console.log(res);
      })
    })

  }
  html: any = '';
  titulo: any = '';
  tipo: any = 0;
  id: any;
  articulo: any;
  @ViewChild('view') lucas: ElementRef | any;
  @ViewChild('image') image: ElementRef | any;

  ngOnInit(): void {
  }

  editorConfig: AngularEditorConfig = {
    editable: false,
    spellcheck: true,
    height: 'auto',
    minHeight: '10',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: false,
    showToolbar: false,
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

}
