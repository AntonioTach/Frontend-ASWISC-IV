import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface RegisterFormDay{
  day: string
}

@Component({
  selector: 'app-horarios',
  //template: '<ejs-schedule></ejs-schedule>',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  fullDays: RegisterFormDay = {
    day: ""
  }

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {

  }

  openM(contenido){
    this.modal.open(contenido, {size:'lg', centered:true});
  }


  UpdateFullDays(value: any){
    console.log(value)

    if(!value.day)
      alert("por favor, selecciona un día");

    
  }



}



