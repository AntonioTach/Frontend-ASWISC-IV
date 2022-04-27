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



}
