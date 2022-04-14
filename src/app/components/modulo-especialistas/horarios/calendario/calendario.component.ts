// importaciones externas
import * as moment from 'moment';
import { L10n } from '@syncfusion/ej2-base'
import { Internationalization } from "@syncfusion/ej2-base";
import { Component, Inject, ViewChild, ViewEncapsulation, OnInit } from "@angular/core";
import { GroupModel, TimeScaleModel, ResourceDetails, RenderCellEventArgs } from "@syncfusion/ej2-angular-schedule";
import { EventRenderedArgs, ScheduleComponent, MonthService, DayService, WeekService,
  WorkWeekService, EventSettingsModel, ResizeService, DragAndDropService, ActionEventArgs, AgendaService
} from '@syncfusion/ej2-angular-schedule';

// importaciones propias
import { HorariosServiceService } from "../../../../services/horarios/horarios-service.service"


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
})
export class CalendarioComponent implements OnInit{  
  
  @ViewChild("scheduleObj", { static: false })
  p = "s"
  
  constructor(public horariosServiceService:HorariosServiceService){}


  public scheduleObj: ScheduleComponent;

  public selectedDate: Date = new Date(); //la fecha por default en el calentario es la actual
  // public allowMultipleOwner: Boolean = true;

  public ownerDataSource: Object[] = [
    { OwnerText: 'Paciente', Id: 1, OwnerColor: '#d6d6d6' }, // gris
    // { OwnerText: 'PacienteRojo', Id: 2, OwnerColor: '#e49898' }, // rojo
  ];

  public timeScale: TimeScaleModel = {
    enable: true,
    interval: 60, // cada 60 min
    slotCount: 1, // 1 division
  };


  public data: object [] =[
    {
      Id: 1, // esta cita es para que no se pueda agendar en horas que ya pasaron
      eventName: '',
      startTime: new Date(2021, 0, 0, 0, 0), // inicio del año pasado
      endTime: new Date(), // fecha actual
      isAllDay: false,
      IsBlock: true, // bloquea y no se puede hacer nada
      color: "#e49898", // rojo
    },
    {
      id: 3,
      eventName: 'Meeting',
      startTime: new Date(2022, 3, 13, 10, 0),
      endTime: new Date(2022, 3, 13, 11, 0),
      isAllDay: false,
      color: "#d6d6d6",
      OwnerId: 1
    }, 
  ];
  

         
  
  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      id: 'id',
      subject: { name: 'eventName' },
      isAllDay: { name: 'isAllDay' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
    }
  };



  ngOnInit(): void {
    // this.data = this.dataAux
    this.modifyFullDaysData();


    this.horariosServiceService.TriggerFullDays.subscribe(res => {
        // console.log(res)

        this.modifyFullDaysData();

      }, err => {
        console.error("ocurrio algún error", err)
    })

  }


  modifyFullDaysData(){
    let date = new Date()
    let year =  date.getFullYear().toString();
    let month =  date.getMonth() + 1;
    let day =  date.getDate();
    let arrayDaysStatus = [ , , , , , , ]

    console.log(year, month, day)
    let today = Date.parse(year + "-" + month + "-" + day)  // obtiene la fecha en mlseg al momento en que empezo el dia de hoy
    // let fechaHoy = new Date(year, month, day, 0, 0) 

    console.log(date.getDay())

    try {
      // this.data = []
      // this.data = this.dataAux

      let fullDaysData: any = JSON.parse(localStorage.getItem("fullDaysData"))
      
      if(fullDaysData){          // SI SE ENCUENTRA VARIABLE EN EL LS SE HACE TODO EL PROCESO
        arrayDaysStatus[0] = fullDaysData[6].domingo
        arrayDaysStatus[1] = fullDaysData[0].lunes
        arrayDaysStatus[2] = fullDaysData[1].martes
        arrayDaysStatus[3] = fullDaysData[2].miercoles
        arrayDaysStatus[4] = fullDaysData[3].jueves
        arrayDaysStatus[5] = fullDaysData[4].viernes
        arrayDaysStatus[6] = fullDaysData[5].sabado

          let lastDayOfYear = Date.parse("2022-12-31");

          let dayMilliseconds = 86400000;
          let diff_in_millisenconds = lastDayOfYear - today;
          let daysToFinishYear = diff_in_millisenconds / dayMilliseconds;
      
          let weekCounter = 0, changingDay = today, dayTour = date.getDay()
      
          for (let i = 4; i < daysToFinishYear + 4; i++) {
              if(arrayDaysStatus[dayTour]){

                  let auxObj = {
                    id: i ,
                    eventName: '',
                    startTime: new Date(changingDay ),
                    endTime: new Date(changingDay + dayMilliseconds - 3600000),
                    isAllDay: false,
                    color: "#e49898",
                    IsBlock: true,
                  }
                    
                  this.data.push(auxObj)
              }
              
              changingDay = changingDay + (dayMilliseconds)
              
              dayTour++
              if(dayTour == 7) dayTour = 0
          }
      
          console.log(this.data)
      }
    } catch (error) {
      console.error("Aun no se ha configurado los horarios", error);
    }

  }


  onRenderCell(args: RenderCellEventArgs): void {
    if (args.elementType == 'workCells') { // si es un tipo de celda de hora de trabajo
      (args.element as HTMLElement).style.background = "#89eaa5";     // pinta celdas de verde
      // (args.element as HTMLElement).style.background = "#fe8484";  // rojo
    }

  }




}
