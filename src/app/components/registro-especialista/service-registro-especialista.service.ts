import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { RegistroEspecialistaComponent } from './registro-especialista.component';
import { especialista } from '../models/especialista';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegistroEspecialistaService {

  URL_API = 'http://localhost:4000/api/especialistas'; //Puerto del server NODE

  selectedEspecialista: especialista | undefined;
  especialistas: especialista[] | undefined; //arreglo de especialistas



  constructor(private http : HttpClient) {}

  // addEspecialista(form: NgForm){
  //   console.log(form.value);

  // }

  createEspecialista(Especialista: especialista){
    return this.http.post(this.URL_API, Especialista);
  }

  // getEspecialistas(){ //prueba
  //   return this.http.get(this.URL_API);

  // }


}
