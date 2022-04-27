// importaciones externas
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// importaciones propias
import { HorariosServiceService } from "../../../services/horarios/horarios-service.service"
import {SelectPartialDaysData, SelectHours} from "./dropDownListsData";

interface RegisterFormDay{
  lunes: string
  martes: string
  miercoles: string
  jueves: string
  viernes: string
  sabado: string
  domingo: string
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

  // selectPartialDayModel: SelectPartialDaysData;
  selectedPartialDay: Number;
  selectedTimeStart: String;
  selectedTimeEnd: String;

  modifedText: string;

  selectPartialDayModel: { id: number; day: string; }[];
  selectTimeModel: { id: number; time: string; value: number; }[];


  $lunesElement;
  $martesElement;
  $miercolesElement;
  $juevesElement;
  $viernesElement;
  $sabadoElement;
  $domingoElement;
  

  constructor(private modal: NgbModal, public horariosServiceService:HorariosServiceService, private router: Router) { }

  ngOnInit(): void {

    this.selectPartialDayModel = SelectPartialDaysData;
    this.selectTimeModel = SelectHours;

    // this.selectedPartialDay = 1;

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
    // console.log(value)
    // console.log(this.selectedPartialDay)
    // console.log(this.selectedTimeStart)
    // console.log(this.selectedTimeEnd)

    if(!this.selectedTimeStart){
      alert("Por favor selecciona la hora de inicio")
    } else  if(!this.selectedTimeEnd){
      alert("Por favor selecciona la hora de termino")
    } if(this.selectedTimeStart >= this.selectedTimeEnd){
      alert("No puedes ingresar una hora de termino despues de la de inicio")
    }else{
      
      const partialDayData = {
        day: this.selectedPartialDay,
        timeStart: this.selectedTimeStart,
        timeEnd: this.selectedTimeEnd
      }
  
      partialDayData.timeStart = this.selectedTimeStart;
  
      // let aux = localStorage.getItem("partialDayData")
      let aux = JSON.parse(localStorage.getItem("partialDayData"));

      let arrayDaysStatus = [ {}, {}, {}, {}, {}, {}, {}]

      if(aux) arrayDaysStatus = aux
  
      if(this.selectedPartialDay == 7)  
          arrayDaysStatus[0]  =   { day: "Dom", timeStart: this.selectedTimeStart, timeEnd: this.selectedTimeEnd }
      if(this.selectedPartialDay == 1)  
          arrayDaysStatus[1]  =   { day: "Lun", timeStart: this.selectedTimeStart, timeEnd: this.selectedTimeEnd }
      if(this.selectedPartialDay == 2)  
          arrayDaysStatus[2]  =   { day: "Mar", timeStart: this.selectedTimeStart, timeEnd: this.selectedTimeEnd }
      if(this.selectedPartialDay == 3)  
          arrayDaysStatus[3]  =   { day: "Mie", timeStart: this.selectedTimeStart, timeEnd: this.selectedTimeEnd }
      if(this.selectedPartialDay == 4)  
          arrayDaysStatus[4]  =   { day: "Jue", timeStart: this.selectedTimeStart, timeEnd: this.selectedTimeEnd }
      if(this.selectedPartialDay == 5)  
          arrayDaysStatus[5]  =   { day: "Vie", timeStart: this.selectedTimeStart, timeEnd: this.selectedTimeEnd }
      if(this.selectedPartialDay == 6)  
          arrayDaysStatus[6]  =   { day: "Sab", timeStart: this.selectedTimeStart, timeEnd: this.selectedTimeEnd }
 
      localStorage.setItem("partialDayData", JSON.stringify(arrayDaysStatus));
          
      // arrayDaysStatus[this.selectedPartialDay!] = partialDayData;
  
      // arrayDaysStatus[0] = fullDaysData[6].domingo
      // arrayDaysStatus[1] = 
      // arrayDaysStatus[2] = 
      // arrayDaysStatus[3] = 
      // arrayDaysStatus[4] = 
      // arrayDaysStatus[5] = 
      // arrayDaysStatus[6] = 
  
      this.horariosServiceService.TriggerPartialDays.emit(partialDayData)

    }


  }








}

