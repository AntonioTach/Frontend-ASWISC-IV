// importaciones externas
import * as moment from 'moment';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { L10n } from '@syncfusion/ej2-base';
import { Internationalization } from "@syncfusion/ej2-base";
import { Component, Inject, ViewChild, ViewEncapsulation, OnInit, HostListener} from "@angular/core";
import { GroupModel, TimeScaleModel, ResourceDetails, RenderCellEventArgs } from "@syncfusion/ej2-angular-schedule";
import { EventRenderedArgs, ScheduleComponent, MonthService, DayService, WeekService,
  WorkWeekService, EventSettingsModel, ResizeService, DragAndDropService, ActionEventArgs, AgendaService
} from '@syncfusion/ej2-angular-schedule';
import { extend, isNullOrUndefined } from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DateTimePicker, ChangeEventArgs } from "@syncfusion/ej2-calendars";

// importaciones propias
import { HorariosServiceService } from "../../../../services/horarios/horarios-service.service"
import { ServiceRevisarPacienteService } from "../../revisar-paciente/service-revisar-paciente.service"
import { timeLog } from 'console';

L10n.load({
  'en-US': {
    'schedule': {
      'saveButton'    : 'Agendar',
      'cancelButton'  : 'Cerrar',
      'deleteButton'  : 'Eliminar',
      'newEvent'      : 'Agendar cita'
    }
  }
});

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
})
export class CalendarioComponent implements OnInit{  
  

  endTimeDate: {
    time: string
  }
  public pacientesDelEspecialista: Object[] = [ ];
  
  onPopupOpen(args: any): void {
    if (args.type === 'Editor') {
      let startTime: HTMLInputElement = args.element.querySelector('#startTime') as HTMLInputElement;
      if (!startTime.classList.contains('e-datetimepicker')) {
        new DateTimePicker({ value: new Date(startTime.value) || new Date() }, startTime);
      }

      let endTime: HTMLInputElement = args.element.querySelector('#endTime') as HTMLInputElement;
      if (!endTime.classList.contains('e-datetimepicker')) {
        new DateTimePicker({ value: new Date(endTime.value) || new Date() }, endTime);
      }

      let ownerElement: HTMLInputElement = args.element.querySelector('#OwnerId');
      if (!ownerElement.classList.contains('e-dropdownlist')) {
        let ownerObject: DropDownList = new DropDownList({
          placeholder: 'Selecciona un paciente',
          fields: { text: 'OwnerName', value: 'Id' },
          dataSource: (this.pacientesDelEspecialista as any),
          value: (((args.data as any).OwnerId instanceof Array) ? (args.data as any).OwnerId : (args.data as any).OwnerName)
        });
        ownerObject.appendTo(ownerElement);
        console.log(ownerObject)
        console.log(ownerElement)
      }
    }
  }


  time: any;
  @ViewChild("scheduleObj", { static: false })
  p = "s"

  @HostListener('document:click', ['$event']) documentClickEvent($event: any) {
    if($event.target.matches("button.e-event-create.e-text-ellipsis.e-control.e-btn.e-lib.e-flat.e-primary") || $event.target.matches("button.e-control.e-btn.e-lib.e-primary.e-event-save.e-flat")){
        let lastPosition = this.eventSettings.dataSource.length - 1
        let cita = this.eventSettings.dataSource[lastPosition];
        console.log(cita)

        cita.idPaciente = cita.OwnerId;
        // cita.nombrePaciente = cita.Owner;
        cita.precio = 400;

        let pacienteName;
        
        this.pacientesDelEspecialista.forEach((e:any) => {
          if(e.Id == cita.idPaciente){
            cita.nombrePaciente = e.OwnerName
            console.log(cita.nombrePaciente)
          }
        });

        // for (let i = 0; i < this.pacientesDelEspecialista.length; i++) {
        //   if(this.pacientesDelEspecialista[i].Id == cita.idPaciente)
        // }

        this.horariosServiceService.addSession(cita).subscribe(res => {
          console.log(res);
          }, err => {
            console.error("ocurrio algún error", err)
        })
        // TRAERLO DE LA BD CADA QUE SE CARGUE EL MAPA O SE MODIFIQUE EL EVENTSETTINGS
    }else if($event.target.matches("div.cita")){
      let timeElement = $event.target.id

      this.time = new Date(timeElement).toISOString()

    }else if($event.target.matches("button.e-control.e-btn.e-lib.e-quick-alertok.e-flat.e-primary.e-quick-dialog-delete")) {
        this.horariosServiceService.deleteSession(this.time).subscribe(res => {
          console.log(res);
          this.document.location.reload();
          }, err => {
            console.error("ocurrio algún error", err)
        })
    }
  }


  constructor(public horariosServiceService:HorariosServiceService, public serviceRevisarPacienteService:ServiceRevisarPacienteService, private router: Router, @Inject(DOCUMENT) private document: Document){}


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

  public statusFields: Object = { text: "StatusText", value: "StatusText" };
  public StatusData: Object[] = [
    { StatusText: "New", Id: 1 },
    { StatusText: "Requested", Id: 2 },
    { StatusText: "Confirmed", Id: 3 }
  ];

  // CitaScheme: {
  //   id: number,
  //   eventName: string,
  //   startTime: Date,
  //   endTime: Date,
  //   description: string,
  //   idpaciente: string
  //   isAllDay: false,
  //   color: "#d6d6d6",
  // }

  public data: object[] = [
    {
      Id: 1, // esta cita es para que no se pueda agendar en horas que ya pasaron
      eventName: '',
      startTime: new Date(2021, 0, 0, 0, 0), // inicio del año pasado
      endTime: new Date(), // fecha actual
      isAllDay: false,
      IsBlock: true, // bloquea y no se puede hacer nada
      color: "#e49898", // rojo
      //link: "https://calendar.google.com/calendar/"
    },
    // {
    //   id: 2,
    //   eventName: 'Meeting',
    //   startTime: new Date(2022, 4, 4, 10, 0),
    //   endTime: new Date(2022, 4, 4, 11, 0),
    //   isAllDay: false,
    //   color: "#d6d6d6",
    //   OwnerId: 1
    // },
  ];


  public eventSettings: any = {
    dataSource: this.data,
    fields: {
      id: 'id',
      subject: { name: 'eventName' },
      isAllDay: { name: 'isAllDay' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
      idPaciente: { name: 'idPaciente' },
    }
  };



  ngOnInit(): void {
    this.modifyFullDaysData();
    this.getCitas();  // comentar este si se descomenta 'modifyFullDays'

      this.data = [{
          Id: 1,
          eventName: '',
          startTime: new Date(2021, 0, 0, 0, 0),
          endTime: new Date(),
          isAllDay: false,
          IsBlock: true,
          color: "#e49898",
          link: ""
      }];

    this.horariosServiceService.TriggerFullDays.subscribe(res => {
            this.data = [{
              Id: 1,
              eventName: '',
              startTime: new Date(2021, 0, 0, 0, 0),
              endTime: new Date(),
              isAllDay: false,
              IsBlock: true,
              color: "#e49898",
              link: ""
            }];
        this.modifyFullDaysData();

        this.document.location.reload();
      }, err => {
        console.error("ocurrio algún error", err)
    })

    this.horariosServiceService.TriggerPartialDays.subscribe(res => {
            this.data = [{
              Id: 1,
              eventName: '',
              startTime: new Date(2021, 0, 0, 0, 0),
              endTime: new Date(),
              isAllDay: false,
              IsBlock: true,
              color: "#e49898",
              link: ""
            }];
        this.modifyFullDaysData();

        this.document.location.reload();
      }, err => {
        console.error("ocurrio algún error", err)
    })


    // obtiene todos los pacientes del especialista para agregarlos al dropdownlist del form de la cita
    this.serviceRevisarPacienteService.getPacientes().subscribe(res => {
        let pacientesDelEspeci: any = []
        pacientesDelEspeci = res

        for (let i = 0; i < pacientesDelEspeci.length; i++) {
          this.pacientesDelEspecialista.push({ OwnerName: pacientesDelEspeci[i].nombre, Id: pacientesDelEspeci[i].id_paciente, OwnerColor: '#d6d6d6' })
        }

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

    let today = Date.parse(year + "-" + month + "-" + day)  // obtiene la fecha en mlseg al momento en que empezo el dia de hoy
    // let fechaHoy = new Date(year, month, day, 0, 0)

    try {
      let fullDaysData: any = JSON.parse(localStorage.getItem("fullDaysData"))
      let partialDaysData: any = JSON.parse(localStorage.getItem("partialDayData"));


      if(fullDaysData){          // SI SE ENCUENTRA VARIABLE EN EL LS SE HACE TODO EL PROCESO
        arrayDaysStatus[0] = fullDaysData[6].domingo
        arrayDaysStatus[1] = fullDaysData[0].lunes
        arrayDaysStatus[2] = fullDaysData[1].martes
        arrayDaysStatus[3] = fullDaysData[2].miercoles
        arrayDaysStatus[4] = fullDaysData[3].jueves
        arrayDaysStatus[5] = fullDaysData[4].viernes
        arrayDaysStatus[6] = fullDaysData[5].sabado
      }
          let lastDayOfYear = Date.parse("2022-12-31");

          let dayMilliseconds = 86400000;
          let diff_in_millisenconds = lastDayOfYear - today;
          let daysToFinishYear = diff_in_millisenconds / dayMilliseconds;

          let weekCounter = 0, changingDay = today, dayTour = date.getDay()


          for (let i = 4; i < daysToFinishYear + 4; i++) {
              if(partialDaysData && partialDaysData[dayTour].day){
                  let auxObj = {
                    id: i ,
                    eventName: '',
                    startTime: new Date(changingDay),
                    endTime: new Date(changingDay + (partialDaysData[dayTour].timeStart * 1000 * 60 * 60)),
                    isAllDay: false,
                    color: "#e49898",
                    IsBlock: true,
                  }

                  this.data.push(auxObj)

                  auxObj = {
                    id: i ,
                    eventName: '',
                    startTime: new Date(changingDay + (partialDaysData[dayTour].timeEnd * 1000 * 60 * 60)),
                    endTime: new Date(changingDay + dayMilliseconds),
                    isAllDay: false,
                    color: "#e49898",
                    IsBlock: true,
                  }

                  this.data.push(auxObj)
              }else{
                  if(!arrayDaysStatus[dayTour]){
                      let auxObj = {
                        id: i ,
                        eventName: '',
                        startTime: new Date(changingDay ),
                        endTime: new Date(changingDay + dayMilliseconds),
                        isAllDay: false,
                        color: "#e49898",
                        IsBlock: true,
                      }

                      this.data.push(auxObj)
                  }
              }

              changingDay = changingDay + (dayMilliseconds)

              dayTour++
              if(dayTour == 7) dayTour = 0
          }

    } catch (error) {
      console.error("Aun no se ha configurado los horarios", error);
    }
  }



  onRenderCell(args: any): void {

    if (args.elementType == 'workCells') { // si es un tipo de celda de hora de trabajo
      (args.element as HTMLElement).style.background = "#89eaa5";     // pinta celdas de verde
      // (args.element as HTMLElement).style.background = "#fe8484";  // rojo
    }

  }



  // obtiene todas las citas de sus respectivos pacientes
  async getCitas(){
    console.log(this.data)
    let auxData = this.data

    // HACER QUE SE GUARDE TAMBIEN EL NOMBRE DEL USUARIO SELECCIONADO PARA QUE DESPUES SEA MAS FACIL DE MOSTRAR
    const dataCitas = await this.horariosServiceService.getCitasEspecialista().toPromise();

      let citas:any = []
      citas = dataCitas

      for (let i = 0; i < citas.length; i++) {
        auxData.push({
          Id: 350 + i,
            eventName: citas[i].titulo,
            startTime: new Date(citas[i].startTime),
            endTime: new Date(citas[i].endTime),
            description: citas[i].descripcion,
            isAllDay: false,
            color: "#d6d6d6",
            OwnerId: 1,
            link: "https://calendar.google.com/calendar/",
            nombrePaciente: citas[i].nombrePaciente
          })
      }

      this.data.concat(auxData)
      console.log(this.data)

  }





}
