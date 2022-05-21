import * as moment from 'moment';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { L10n } from '@syncfusion/ej2-base';
import { Internationalization } from "@syncfusion/ej2-base";
import { Component, Inject, ViewChild, ViewEncapsulation, OnInit, HostListener, OnDestroy } from "@angular/core";
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
//import { ServiceRevisarPacienteService } from "../../../modulo-especialistas/revisar-paciente/service-revisar-paciente.service";
import { EspecialistaService } from "../../vista-especialista/especialista.service";
import { switchMap, window } from 'rxjs/operators';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { defer, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

declare global {
	interface Window {
		Stripe?: any;
	}
}

@Component({
	selector: 'app-calendario-component',
	templateUrl: './calendario-component.component.html',
	styleUrls: ['./calendario-component.component.css'],
	encapsulation: ViewEncapsulation.None,
	providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
})
export class CalendarioComponentComponent implements OnInit, OnDestroy {

	public pacientesDelEspecialista: Object[] = [];
	@ViewChild(StripeCardComponent) card: StripeCardComponent;
	cardOptions: StripeCardElementOptions = {
        style: {
            base: {
                iconColor: '#dadada',
                color: '#dadada',
                fontWeight: '300',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                    color: '#fdfdfd'
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
	) { }

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

	ngOnDestroy(): void {
		if (this.cardSubs)
			this.cardSubs.unsubscribe()
	}

	/**
	 * Esta función se encarga de hacer el proceso de pago y el respectivo manejo
	 * de los escenarios en los que SI funciona y en los que NO funciona el pago
	 */
	onPayConsulta(): void {
		defer(() => {
			return this.http.post('tu-endpoint-que-genera-un-client-secret', {
				amount: 5000 // TODO: Poner el amount del pago en CENTAVOS -> cifra_normal * 1000
			})
		})
		.pipe(
			switchMap((data: any) => {
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
					return of(null)
				}
				// HACER MANEJO DE CUANDO EL PAGO SI ES EXITOSO
				return this.http.post('tu-endpoint-que-hace-la-cita', {
					data: null // TODO: Agregar los datos de la cita YA PAGADA
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
			if (!ownerElement.classList.contains('e-dropdownlist')) {
				let ownerObject: DropDownList = new DropDownList({
					placeholder: 'Selecciona un paciente',
					fields: { text: 'OwnerText', value: 'Id' },
					dataSource: (this.pacientesDelEspecialista as any),
					value: (((args.data as any).OwnerId instanceof Array) ? (args.data as any).OwnerId : (args.data as any).OwnerId)
				});
				ownerObject.appendTo(ownerElement);
			}
		}
	}


	@ViewChild("scheduleObj", { static: false })
	p = "s"

	@HostListener('document:click', ['$event']) documentClickEvent($event: any) {
		if ($event.target.matches("button.e-event-create.e-text-ellipsis.e-control.e-btn.e-lib.e-flat.e-primary") || $event.target.matches("button.e-control.e-btn.e-lib.e-primary.e-event-save.e-flat")) {
			let lastPosition = this.eventSettings.dataSource.length - 1
			let cita = this.eventSettings.dataSource[lastPosition];
			console.log(cita)

			cita.idPaciente = cita.OwnerId;
			cita.precio = 400;

			this.horariosServiceService.addSession(cita).subscribe(res => {
				console.log(res);

			}, err => {
				console.error("ocurrio algún error", err)
			})
			// TRAERLO DE LA BD CADA QUE SE CARGUE EL MAPA O SE MODIFIQUE EL EVENTSETTINGS
		}
	}




	public scheduleObj: ScheduleComponent;

	public selectedDate: Date = new Date(); //la fecha por default en el calentario es la actual
	// public allowMultipleOwner: Boolean = true;

	public ownerDataSource: Object[] = [
		{ OwnerText: 'Paciente', Id: 1, OwnerColor: '#d6d6d6' }, // gris
		{ OwnerText: 'PacienteRojo', Id: 2, OwnerColor: '#e49898' }, // rojo
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

	///this.STRIPE = window.Stripe('pk_test_51KvYRzEeE5SQU3ghDDAgZUkUx7FC2SsjuGc9hOPBGLjEWiuxV7JthhHzdeFVhHaV5ysn22DMMGj9zXzL3cmCRjhD00sNAmmgH2');

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
		console.log(this.data)
		let auxData = this.data

		// HACER QUE SE GUARDE TAMBIEN EL NOMBRE DEL USUARIO SELECCIONADO PARA QUE DESPUES SEA MAS FACIL DE MOSTRAR
		const dataCitas = await this.horariosServiceService.getCitasEspecialista().toPromise();

		let citas: any = []
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
				OwnerId: 1
			})
			// console.log(this.data)
		}

		this.data.concat(auxData)
		console.log(this.data)

	}
}
