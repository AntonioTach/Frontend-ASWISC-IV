import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  week:any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  monthSelect : any [];
  dateSelect : any;

  constructor() { }

  ngOnInit(): void {
    this.getDaysFromDate(11,2022)
  }

  getDaysFromDate(month,year){ //le pasamos la información que va a recibir la función

    const startDate =  moment.utc(`${year}/${month}/01`);//objeto tipo day cuando inicia el mes
    const endDate = startDate.clone().endOf('month')//el objeto de la fecha cuando finaliza
    this.dateSelect = startDate; // se guardar

    const diffDays = endDate.diff(startDate,'days', true); //con diff se trae la cantidad de días que existen entre las fechas de inicio y final de mes
    //esto nos arroja un numero sin redondear, en decimal, así que hay que redondearlo
    const numberDays = Math.round(diffDays); //redondea

    //falta crear un array con el número de días
    const arrayDays = Object.keys([...Array(numberDays)]).map((a:any) =>{
      a = parseInt(a)+1;

    })





  }

}
