import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-crear-articulos',
  templateUrl: './crear-articulos.component.html',
  styleUrls: ['./crear-articulos.component.css']
})
export class CrearArticulosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
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
