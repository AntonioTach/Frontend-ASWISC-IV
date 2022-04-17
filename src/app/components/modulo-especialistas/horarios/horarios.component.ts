// importaciones externas
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

// importaciones propias
import { HorariosServiceService } from "../../../services/horarios/horarios-service.service"
import {SelectDays} from "./dropDownListsData";

interface RegisterFormDay{
  lunes: string
  martes: string
  miercoles: string
  jueves: string
  viernes: string
  sabado: string
  domingo: string
}

interface RegisterFormPartialDay{
  day: string,
  startTime: string
  endTime: string
}

@Component({
  selector: 'app-horarios',
  //template: '<ejs-schedule></ejs-schedule>',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  extend: boolean = false;
  
  fullDays: RegisterFormDay = {
    lunes: "",
    martes: "",
    miercoles: "",
    jueves: "",
    viernes: "",
    sabado: "",
    domingo: "",
  }

  // PartialDays: RegisterFormDay = {
  //   lunes: "",
  //   martes: "",
  //   miercoles: "",
  //   jueves: "",
  //   viernes: "",
  //   sabado: "",
  //   domingo: "",
  // }

  PartialDays: RegisterFormPartialDay = {
    day: "",
    startTime: "",
    endTime: ""
  }

  $lunesElement;
  $martesElement;
  $miercolesElement;
  $juevesElement;
  $viernesElement;
  $sabadoElement;
  $domingoElement;

  constructor(private modal: NgbModal, public horariosServiceService:HorariosServiceService, private router: Router, public selectDays: SelectDays) { }

  ngOnInit(): void {

    if(!localStorage.getItem("fullDaysData")){
      let fullDaysData = [];

        fullDaysData.push({"lunes": false})
        fullDaysData.push({"martes": false})
        fullDaysData.push({"miercoles": false})
        fullDaysData.push({"jueves": false})
        fullDaysData.push({"viernes": false})
        fullDaysData.push({"sabado": false})
        fullDaysData.push({"domingo": false})

        localStorage.setItem("fullDaysData", JSON.stringify(fullDaysData))
    }


  }


  openModal(contenido){
    this.modal.open(contenido, {size:'lg', centered:true});
  }


    // se llama cuando se presiona cualquier parte del input de "selecciona los dias" en modificar dias completos
  // carga todos los estados de las checkbox de los dias conforme se guardaron la ultima ocasion
  showCheckBoxes(){
    document.querySelector('.list').classList.toggle('show');
    document.querySelector('.down-arrow').classList.toggle('rotate180');

    // if(this.verifyCheckBoxes){}
      this.$lunesElement = document.getElementById("lunes") as HTMLInputElement | null;
      this.$martesElement = document.getElementById("martes") as HTMLInputElement | null;
      this.$miercolesElement = document.getElementById("miercoles") as HTMLInputElement | null;
      this.$juevesElement = document.getElementById("jueves") as HTMLInputElement | null;
      this.$viernesElement = document.getElementById("viernes") as HTMLInputElement | null;
      this.$sabadoElement = document.getElementById("sabado") as HTMLInputElement | null;
      this.$domingoElement = document.getElementById("domingo") as HTMLInputElement | null;

    let fullDaysData = JSON.parse(localStorage.getItem("fullDaysData"));

    if(fullDaysData != null){
        if(this.$lunesElement != null)
          this.$lunesElement.checked = fullDaysData[0].lunes
          
        if(this.$martesElement != null)
          this.$martesElement.checked = fullDaysData[1].martes

        if(this.$miercolesElement != null)
          this.$miercolesElement.checked = fullDaysData[2].miercoles

        if(this.$juevesElement != null)
          this.$juevesElement.checked = fullDaysData[3].jueves

        if(this.$viernesElement != null)
          this.$viernesElement.checked = fullDaysData[4].viernes

        if(this.$sabadoElement != null)
          this.$sabadoElement.checked = fullDaysData[5].sabado

        if(this.$domingoElement != null)
          this.$domingoElement.checked = fullDaysData[6].domingo
    }


  }


  // es el metodo que se llama cuando se presiona el boton de "Actualizar día(s) completos"
  UpdateFullDays(value: any){
    // console.log(value)
    let fullDaysData = [];

    if(this.$lunesElement != null)
      fullDaysData.push({"lunes": this.$lunesElement.checked})

    if(this.$martesElement != null)
      fullDaysData.push({"martes": this.$martesElement.checked})

    if(this.$miercolesElement != null)
      fullDaysData.push({"miercoles": this.$miercolesElement.checked})

    if(this.$juevesElement != null)
      fullDaysData.push({"jueves": this.$juevesElement.checked})

    if(this.$viernesElement != null)
      fullDaysData.push({"viernes": this.$viernesElement.checked})

    if(this.$sabadoElement != null)
      fullDaysData.push({"sabado": this.$sabadoElement.checked})

    if(this.$domingoElement != null)
      fullDaysData.push({"domingo": this.$domingoElement.checked})

      localStorage.setItem("fullDaysData", JSON.stringify(fullDaysData))

      this.horariosServiceService.TriggerFullDays.emit(fullDaysData)

  }


  UpdatePartialDays(value: any){
    this.PartialDays = value
    console.log(value)
    console.log(this.PartialDays)
  }








}

