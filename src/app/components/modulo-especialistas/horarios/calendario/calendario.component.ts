import { Component, Inject, ViewChild, ViewEncapsulation } from "@angular/core";
//import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
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
// import { ChangeEventArgs } from '@syncfusion/ej2-calendars';
// import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';

L10n.load({
  'en-US': {
    'schedule':{
      'saveButton': 'Guardar',
      'cancelButton': 'Cancelar',
      'deleteButton': 'Eliminar',
      'newEvent': 'Nueva cita'
    }
  }
})

@Component({
  selector: 'app-calendario',
  // template: '<ejs-schedule height="650" width="800" [eventSettings]="eventObject" [selectedDate]="selectedDate" [currentView]="currentView"></ejs-schedule>',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
  // encapsulation: ViewEncapsulation.None
})
export class CalendarioComponent {

  // title = "my-scheduler-app"
  // variables de configuracion que se relacionan con el html
  public selectedDate: Date = new Date() // fecha actual
  public currentView: View = "Week";    // inicia en la vista de semana
  public allowResizing: boolean = false;
  public allowDragDrop: boolean = false;
  public timeScale: TimeScaleModel = {
    enable: true,
    interval: 60, // cada 60 min
    slotCount: 1, // 1 division
    majorSlotTemplate: "#majorSlotTemplate",
    minorSlotTemplate: "#minorSlotTemplate"
  };
  public instance: Internationalization = new Internationalization();
  public group: GroupModel = { resources: ["Doctors"] }; // aun no tengo del todo claro para que es
  // public group: GroupModel = { allowGroupEdit: true };

  getMajorTime(date: Date): string {
    return this.instance.formatDate(date, { skeleton: "hm" });
  }
  getMinorTime(date: Date): string {
    return this.instance
      .formatDate(date, { skeleton: "ms" })
      .replace(":00", "");
  }

  // public dataParser(data: any){
  //   return new Date(data)
  // }
  // public statusField: Object = { text: 'StatusText', value: 'StatusText' }
  // public StatusData: Object[] = [
  //   {StatusText: 'New'},
  //   {StatusText: 'Requested'},
  //   {StatusText: 'Confirmed'}
  // ]

  // @ViewChild('scheduleObj')
  // public scheduleObj: ScheduleComponent;
  // public eventSettings: EventSettingsModel = { dataSource: extend([], doctorsEventData, null, true) as Record<string, any>[] };
  /*
  public showQuickInfo = false;
  public startDate: Date;
  public endDate: Date;
  public statusData: string[] = ['New', 'Requested', 'Confirmed'];

  public startDateParser(data: string) {
    if (isNullOrUndefined(this.startDate) && !isNullOrUndefined(data)) {
      return new Date(data);
    } else if (!isNullOrUndefined(this.startDate)) {
      return new Date(this.startDate);
    } else{
      return new Date(data);
    }
  }
  public endDateParser(data: string) {
    if (isNullOrUndefined(this.endDate) && !isNullOrUndefined(data)) {
      return new Date(data);
    } else if (!isNullOrUndefined(this.endDate)) {
      return new Date(this.endDate);
    } else {
      return new Date(data);
    }
  }
  public onDateChange(args: any): void {
    if (!isNullOrUndefined(args.event)) {
      if (args.element.id === "StartTime") {
        this.startDate = args.value;
      } else if (args.element.id === "EndTime") {
        this.endDate = args.value;
      }
    }
  }
  public onPopupClose() {
    this.startDate = null;
    this.endDate = null;
  }
  public onActionBegin(args: ActionEventArgs): void {
    if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
      const data: Record<string, any> = args.data instanceof Array ? args.data[0] : args.data;
      if (!this.scheduleObj.isSlotAvailable(data.StartTime as Date, data.EndTime as Date)) {
        args.cancel = true;
      }
    }
  }
  */

  //Objeto de prueba, es el objeto de cuando se guarda una nueva cita, cuando se activa los 'e-resources'
  public resourceDataSource: Object[] = [
    {
      text: "Cita",
      id: 1,
      color: "rgb(207, 205, 199)",
      workDays: [0, 1, 2, 3, 4, 5, 6],
      startHour: "00:00",
      endHour: "23:59",
      availableTime: [
        { startTime: "00:00", endTime: "24:00", color: "#e49898" },
      ]
    }
  ];

  // son las citas que se muestran cuando carga el calendario
  public eventSettings: EventSettingsModel = {
    dataSource: [
      {
                Id: 1, // esta cita es para que no se pueda agendar en horas que ya pasaron
                Subject: '',
                StartTime: new Date(2021, 0, 0, 0, 0), // inicio del año pasado
                EndTime: new Date(), // fecha actual
                IsBlock: true, // bloquea y no se puede hacer nada
                color: "#e49898" // rojo
              },
              // {
              //   Id: 2,
              //   Subject: '',
              //   StartTime: new Date(2022, 2, 16, 18, 0),
              //   EndTime: new Date(2022, 2, 16, 24, 0),
              //   IsBlock: true,
              //   color: "#e49898"
              // },
              // {
              //   Id: 3,
              //   Subject: 'Cita con pancho',
              //   StartTime: new Date(2022, 2, 17, 9, 0),
              //   EndTime: new Date(2022, 2, 17, 10, 0),
              //   color: "rgb(207, 205, 199)"
              // },
    ],
    // fields: {
    //   subject: { title: "Service Type", name: "Subject" },
    //   location: { title: "Patient Name", name: "Location" },
    //   description: { title: "Summary", name: "Description" },
    //   startTime: { title: "From", name: "StartTime" },
    //   endTime: { title: "To", name: "EndTime" }
    // }
  };
  

  @ViewChild("scheduleObj", { static: false })
  public scheduleObj: ScheduleComponent;

  constructor() { }

  /*
  onRenderCell(args: RenderCellEventArgs): void {
    // console.log(this.eventSettings)
    if (args.element.classList.contains("e-work-hours")) {
      // console.log(args)
      
      //get the date of the cell
      let cellDate: Date = new Date(
        parseInt(args.element.getAttribute("data-date"))
      );

      console.log(args.element)
      //get the resource index
      // 'data-group-index'=0 , asi debe de ser
      let resourceIndex: number = parseInt(
        args.element.getAttribute("data-group-index")
      );
      // hacemos una maña asignandolo asi
      // let resourceIndex = 0
      console.log(resourceIndex)

      //collect the available time object from resource collection
      let differentTimeData: any = this.scheduleObj.getResourcesByIndex(
        resourceIndex
      ).resourceData.availableTime;
      console.log(differentTimeData)

      //apply the color based on the time
      for (let i = 0; i < differentTimeData.length; i++) {
        console.log(i)
        let startTimeDetails = differentTimeData[i].startTime.split(":");
        let endTimeDetails = differentTimeData[i].endTime.split(":");
        let startTime: Date = new Date(
          new Date(cellDate.getTime()).setHours(
            parseInt(startTimeDetails[0], parseInt(startTimeDetails[1]))
          )
        );
        let endTime: Date = new Date(
          new Date(cellDate.getTime()).setHours(
            parseInt(endTimeDetails[0], parseInt(endTimeDetails[1]))
          )
        );
        if (cellDate.getTime() >= startTime.getTime() && cellDate.getTime() < endTime.getTime()) {
          (args.element as HTMLElement).style.background = differentTimeData[i].color;
          break;
        }
      }
    }
  }
  */

  // Guardar en la bd las configuraciones de verde y rojo del usuario (quizas solo lo verde)
  // tambien guardar las grises
  // que pinte todo de rojo, menos las citas que se guardaron como gris y opciones verdes que se configuraron
  // cada celda tiene una hora en especial, quizas si se guarda esa hora y se compara la pinte de distinto color
  // desabilitar las celdas de rojo y mandar alerta de que no se puede hacer nada cada que se presione
  // unicamente desploquear horas guardadas como verde y grises
 
  public onRenderCell(args: RenderCellEventArgs): void {  // cuando carga el calendario, renderiza cada una de las celdas
  //  console.log(args.elementType)
  //  console.log(args.element)
  //  console.log(args.date)
  //  console.log(args.groupIndex)
  //  console.log(args.name)
    console.log("hola juan")
    if (args.elementType == 'workCells') { // si es un tipo de celda de hora de trabajo
      (args.element as HTMLElement).style.background = "#89eaa5";     //pinta celdas de verde
      // (args.element as HTMLElement).style.background = "#fe8484";  // rojo
    }

  }


}
