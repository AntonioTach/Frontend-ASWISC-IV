import { Component, Inject, ViewChild, ViewEncapsulation, OnInit } from "@angular/core";
import * as moment from 'moment';
import {
  View,
  GroupModel,
  TimeScaleModel,
  ResourceDetails,
  TreeViewArgs,
  PopupOpenEventArgs,
  EventFieldsMapping,
  RenderCellEventArgs,
} from "@syncfusion/ej2-angular-schedule";
import {
  EventRenderedArgs, ScheduleComponent, MonthService, DayService, WeekService,
  WorkWeekService, EventSettingsModel, ResizeService, DragAndDropService, ActionEventArgs, AgendaService
} from '@syncfusion/ej2-angular-schedule';
import { Internationalization } from "@syncfusion/ej2-base";
import { L10n } from '@syncfusion/ej2-base'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
})
export class CalendarioComponent implements OnInit{  
  @ViewChild("scheduleObj", { static: false })
  date = new Date()
  
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

  public data: object [] = [
    {
      Id: 1, // esta cita es para que no se pueda agendar en horas que ya pasaron
      eventName: 'a',
      startTime: new Date(2021, 0, 0, 0, 0), // inicio del año pasado
      endTime: new Date(), // fecha actual
      isAllDay: false,
      IsBlock: true, // bloquea y no se puede hacer nada
      color: "#e49898", // rojo
      OwnerId: 2  // para el color rojo
    },
        // {
        //   id: 2,
        //   eventName: '',
        //   startTime: new Date(2022, 3, 15, 19, 0),
        //   endTime: new Date(2022, 3, 15, 24, 0),
        //   IsBlock: true,
        //   color: "#e49898",
        // },
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
    console.log(this.date.getDay())
  }


  onRenderCell(args: RenderCellEventArgs): void {
    if (args.elementType == 'workCells') { // si es un tipo de celda de hora de trabajo
      (args.element as HTMLElement).style.background = "#89eaa5";     // pinta celdas de verde
      // (args.element as HTMLElement).style.background = "#fe8484";  // rojo
      // console.log(args)
    }

  }



}
