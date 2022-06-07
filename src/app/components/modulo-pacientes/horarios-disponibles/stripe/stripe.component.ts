import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StripeConstructor } from '@stripe/stripe-js';
import { MyServiceNombrePacienteService } from '../../nombre-paciente/my-service-NombrePaciente.service';

  interface Window{
    Stripe?: StripeConstructor;
  }


@Component({
  selector: 'app-stripe-component',
	templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
