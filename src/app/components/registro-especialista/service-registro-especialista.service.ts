import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegistroEspecialistaService {

  URL_API = 'http://localhost:4000/api/especialistas'; //Puerto del server NODE

  constructor(private http : HttpClient) {}

  addEspecialista(form: NgForm){
    console.log(form.value);

  }

  // getEspecialistas(){ //prueba
  //   return this.http.get(this.URL_API);

  // }


}
