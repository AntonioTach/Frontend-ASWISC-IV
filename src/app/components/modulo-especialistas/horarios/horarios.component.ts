import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-horarios',
  //template: '<ejs-schedule></ejs-schedule>',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {

  }

  openM(contenido){
    this.modal.open(contenido, {size:'lg', centered:true});
  }

}



