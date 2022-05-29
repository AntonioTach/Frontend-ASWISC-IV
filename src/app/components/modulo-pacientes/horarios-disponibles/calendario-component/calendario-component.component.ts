import * as moment from 'moment';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { L10n } from '@syncfusion/ej2-base';
import { Internationalization } from "@syncfusion/ej2-base";
import { Component, Inject, ViewChild, ViewEncapsulation, OnInit, HostListener, OnDestroy, Renderer2, ElementRef } from "@angular/core";
import { GroupModel, TimeScaleModel, ResourceDetails, RenderCellEventArgs } from "@syncfusion/ej2-angular-schedule";
import {
	EventRenderedArgs, ScheduleComponent, MonthService, DayService, WeekService,
	WorkWeekService, EventSettingsModel, ResizeService, DragAndDropService, ActionEventArgs, AgendaService
} from '@syncfusion/ej2-angular-schedule';
import { extend, isNullOrUndefined } from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DateTimePicker, ChangeEventArgs } from "@syncfusion/ej2-calendars";

// importaciones propias
import { HorariosServiceService } from "../../../../services/horarios/horarios-service.service";
import { MyServiceNombrePacienteService } from "../../nombre-paciente/my-service-NombrePaciente.service";
//import { ServiceRevisarPacienteService } from "../../../modulo-especialistas/revisar-paciente/service-revisar-paciente.service";
import { EspecialistaService } from "../../vista-especialista/especialista.service";
import { switchMap, window } from 'rxjs/operators';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { defer, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


L10n.load({
	'en-US': {
		'schedule': {
			'saveButton': 'Agendar',
			'cancelButton': 'Cerrar',
			'deleteButton': 'Eliminar',
			'newEvent': 'Agendar cita'
		}
	}
});

// declare global {
// 	interface Window {
// 		Stripe?: any;
// 	}
// }

@Component({
	selector: 'app-calendario-component',
	templateUrl: './calendario-component.component.html',
	styleUrls: ['./calendario-component.component.css'],
	encapsulation: ViewEncapsulation.None,
	providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
})
export class CalendarioComponentComponent implements OnInit, OnDestroy {

  id_usuario = localStorage.getItem('id_usuario');
  precio: any;
  id_paciente: any;

	public pacientesDelEspecialista: Object[] = [];
	@ViewChild(StripeCardComponent) card: StripeCardComponent;
	cardOptions: StripeCardElementOptions = {
        style: {
            base: {
                iconColor: '#2E4053',
                color: '#2E4053',
                fontWeight: '300',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                    color: '#D6DBDF'
                }
            }
        }
    };
    elementsOptions: StripeElementsOptions = {
        locale: 'es'
    };
	cardSubs: Subscription;
    validCard: boolean = false;

	constructor(
		public horariosServiceService: HorariosServiceService,
		public servicePaciente: EspecialistaService,
		private router: Router,
		@Inject(DOCUMENT)
		private document: Document,
		private stripeService: StripeService,
		private http: HttpClient,
		public getServicePaciente : MyServiceNombrePacienteService,
		private _snackBar: MatSnackBar,
		private modal: NgbModal,
		private renderer: Renderer2
	) { }

	

	ngOnInit(): void {
		this.modifyFullDaysData();
    this.cargarPaciente();
		this.getCitas();  // comentar este si se descomenta 'modifyFullDays'


		this.data = [{
			Id: 1,
			eventName: '',
			startTime: new Date(2021, 0, 0, 0, 0),
			endTime: new Date(),
			isAllDay: false,
			IsBlock: true,
			color: "#e49898",
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
			}];
			this.modifyFullDaysData();

			this.document.location.reload();

		}, err => {
			console.error("ocurrio algún error", err)
		})

		setTimeout(()=>{
            this.cardSubs = this.card.change.subscribe(({complete}:any)=>{
                this.validCard = complete
            })
        },1000)
		//obtiene todos los pacientes del especialista para agregarlos al dropdownlist del form de la cita
		// this.serviceRevisarPacienteService.getPacientes().subscribe(res => {
		//     let pacientesDelEspeci: any = []
		//     pacientesDelEspeci = res
		//     console.log(res);
		//     // for (let i = 0; i < pacientesDelEspeci.length; i++) {
		//     //   this.pacientesDelEspecialista.push({ OwnerText: pacientesDelEspeci[i].nombre, Id: pacientesDelEspeci[i].id_paciente, OwnerColor: '#ffaa00' })
		//     // }
		//   }, err => {
		//     console.error("ocurrio algún error", err)
		// })
		// this.servicePaciente.getPaciente()
	}

  cargarPaciente() {
    this.getServicePaciente.getPaciente(this.id_usuario).subscribe(
      (res: any) => {
        var obj = res[0];
        this.precio = obj.precio_consulta;
        this.id_paciente = obj.id_paciente;
      },
      (err) => console.log(err)
    );
  }

  openModal(contenido){
	  console.log("Entro a el modal")
    this.modal.open(contenido, {size:'sl', centered:true});
  }

  error(){
    this._snackBar.open('Error en Pago de Sesión', '', {
      duration: 5000, //5s
      panelClass: "red",
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

	ngOnDestroy(): void {
		if (this.cardSubs)
			this.cardSubs.unsubscribe()
	}

	/**
	 * Esta función se encarga de hacer el proceso de pago y el respectivo manejo
	 * de los escenarios en los que SI funciona y en los que NO funciona el pago
	 */
	onPayConsulta(): void {
		console.log("entro a onPayConsulta")
		defer(() => {
			return this.http.post('http://localhost:4000/horarios/paymentIntent/', {
				amount: this.precio * 1000// TODO: Poner el amount del pago en CENTAVOS -> cifra_normal * 1000
			})
		})
		.pipe(
			switchMap((data: any) => {
				console.log('card', this.card)
				console.log('data client?', data);
				return data.client_secret ?
					this.stripeService.confirmCardPayment(data.client_secret, {
						payment_method: {
							card: this.card.element
						}
					}) :
					of(null)

			}),
			switchMap((data: any) => {
				if (!data) return of(null)
				if (data.error) {
					// TODO: Hacer manejo de cuando el pago NO ES exitoso
          this.error();
					return of(null)
				}
				// HACER MANEJO DE CUANDO EL PAGO SI ES EXITOSO
			let lastPosition = this.eventSettings.dataSource.length - 1
			let cita = this.eventSettings.dataSource[lastPosition];
			let id_usuario = this.id_usuario;
			cita.idPaciente = cita.OwnerId;

			console.log("entro a guardar la cita")
			console.log(cita)
					return this.http.post('http://localhost:4000/horarios/addSessionPaciente/', {
			//Data de la cita asi como timeStart, timeEnd etc.
			id_usuario,
			cita
					//data: null // TODO: Agregar los datos de la cita YA PAGADA

				})
			})
		)
		.subscribe((data: any) => {
			if (data) {
				// AQUI HACES MANEJO PARA CUANDO YA SE HIZO LA CITA
			}
		}, (error) => {
			// TODO: Hacer manejo de cualquier error catastrofico en el proceso de pago
			console.log('error: ', error)
		})
	}

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
			// if (!ownerElement.classList.contains('e-dropdownlist')) {
			// 	let ownerObject: DropDownList = new DropDownList({
			// 		placeholder: 'Selecciona un paciente',
			// 		fields: { text: 'OwnerText', value: 'Id' },
			// 		dataSource: (this.pacientesDelEspecialista as any),
			// 		value: (((args.data as any).OwnerId instanceof Array) ? (args.data as any).OwnerId : (args.data as any).OwnerId)
			// 	});
			// 	ownerObject.appendTo(ownerElement);
			// }
		}
	}


	time: any;
	@ViewChild("scheduleObj", { static: false })
	p = "s"

	@ViewChild("contenido") contenido: ElementRef;

	@HostListener('document:click', ['$event']) documentClickEvent($event: any) {

		// let aux:any = this.document.getElementsByClassName("e-control e-btn e-lib e-primary e-event-save e-flat")
		// 	if(aux)	aux.setAttribute("(click)","openModal(contenido)")


		if ($event.target.matches("button.e-event-create.e-text-ellipsis.e-control.e-btn.e-lib.e-flat.e-primary") || $event.target.matches("button.e-control.e-btn.e-lib.e-primary.e-event-save.e-flat")) {
			// let contenido = document.getElementById("contenido")
			console.log(this.contenido)
			this.openModal(this.contenido)

		}else if($event.target.matches("div.cita")){
			let timeElement = $event.target.id

			this.time = new Date(timeElement).toISOString()
			console.log("entro a un delete")

		}else if($event.target.matches("button.e-control.e-btn.e-lib.e-quick-alertok.e-flat.e-primary.e-quick-dialog-delete")) {
			  console.log("entro a el otro")

					this.horariosServiceService.deleteSessionPaciente(this.time).subscribe(res => {
						console.log(res);
						this.document.location.reload();
						}, err => {
						console.error("ocurrio algún error", err)
					})
    	}

	}




	public scheduleObj: ScheduleComponent;

	public selectedDate: Date = new Date(); //la fecha por default en el calentario es la actual
	// public allowMultipleOwner: Boolean = true;

	public ownerDataSource: Object[] = [
		{ OwnerText: 'Paciente', Id: 1, OwnerColor: '#d6d6d6' }, // gris
		{ OwnerText: 'Paciente', Id: 2, OwnerColor: '#5DADE2' }, // azul
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

	private readonly STRIPE!: any;
	private elementStripe!: any;
	cardNumber: any;
	cardCvv: any;
	cardExp: any;
	id!: string;
	orderData!: any;


	modifyFullDaysData() {
		let date = new Date()
		let year = date.getFullYear().toString();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let arrayDaysStatus = [, , , , , ,]

		let today = Date.parse(year + "-" + month + "-" + day)  // obtiene la fecha en mlseg al momento en que empezo el dia de hoy
		// let fechaHoy = new Date(year, month, day, 0, 0)


		try {
			let fullDaysData: any = JSON.parse(localStorage.getItem("fullDaysData"))
			let partialDaysData: any = JSON.parse(localStorage.getItem("partialDayData"));


			if (fullDaysData) {          // SI SE ENCUENTRA VARIABLE EN EL LS SE HACE TODO EL PROCESO
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
				if (partialDaysData && partialDaysData[dayTour].day) {
					let auxObj = {
						id: i,
						eventName: '',
						startTime: new Date(changingDay),
						endTime: new Date(changingDay + (partialDaysData[dayTour].timeStart * 1000 * 60 * 60)),
						isAllDay: false,
						color: "#e49898",
						IsBlock: true,
					}

					this.data.push(auxObj)

					auxObj = {
						id: i,
						eventName: '',
						startTime: new Date(changingDay + (partialDaysData[dayTour].timeEnd * 1000 * 60 * 60)),
						endTime: new Date(changingDay + dayMilliseconds),
						isAllDay: false,
						color: "#e49898",
						IsBlock: true,
					}

					this.data.push(auxObj)
				} else {
					if (!arrayDaysStatus[dayTour]) {
						let auxObj = {
							id: i,
							eventName: '',
							startTime: new Date(changingDay),
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
				if (dayTour == 7) dayTour = 0
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
	async getCitas() {
		// console.log('cita: ', this.data);
		let auxData = this.data

		const dataCitas = await this.horariosServiceService.getCitasEspecialistaPaciente().toPromise();
		console.log('datacitas', dataCitas)

		let citas: any = []
		citas = dataCitas

		let colorCita = "", auxOwnerId = 0, isBlockAux;
		let currentId = localStorage.getItem('id_usuario')

		for (let i = 0; i < citas.length; i++) {
			if(citas[i].id_paciente == this.id_paciente){
				colorCita = "#5DADE2"
				auxOwnerId = 2
				isBlockAux = false
			}else{
				colorCita = "#d6d6d6"
				auxOwnerId = 1
				isBlockAux = true
			}
      console.log(citas[i]);
			auxData.push({
				Id: 350 + i,
				eventName: citas[i].titulo,
				startTime: new Date(citas[i].startTime),
				endTime: new Date(citas[i].endTime),
				description: citas[i].descripcion,
				isAllDay: false,
				color: colorCita,
				OwnerId: auxOwnerId,
				IsBlock: isBlockAux,
			})
			// console.log(this.data)
		}

		this.data.concat(auxData)
		console.log(this.data)

	}
}
