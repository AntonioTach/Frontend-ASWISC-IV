import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HorariosServiceService {

  @Output() TriggerFullDays: EventEmitter<any> = new EventEmitter();
  @Output() TriggerPartialDays: EventEmitter<any> = new EventEmitter();

  URL_API = 'http://localhost:4000';

  constructor(private http: HttpClient) { }


  addSession(cita : any) {
    console.log(cita)
    let id = localStorage.getItem("id_especialista");
    return this.http.post('http://localhost:4000/horarios/addSession/' + id, cita);
  }

  addSessionPaciente(cita: any){
    let id = localStorage.getItem("id_usuario");
    return this.http.post('http://localhost:4000/horarios/addSessionPaciente/' + id, cita);
  }

  deleteSession(endTimeDate : any) {
    console.log(endTimeDate)
    let id = localStorage.getItem("id_especialista");
    return this.http.delete('http://localhost:4000/horarios/deleteSession/' + id + "$" + endTimeDate, endTimeDate);
  }

  getCitasEspecialista() {
    let id = localStorage.getItem("id_especialista");
    return this.http.get('http://localhost:4000/horarios/get-citas-especialista/' + id);
  }

  // paymentIntent(precio: any){
  //   let id = localStorage.getItem("id_especialista");
  //   return this.http.post('http://localhost:4000/horarios/paymentIntent/' + id, precio);
  // }


}
