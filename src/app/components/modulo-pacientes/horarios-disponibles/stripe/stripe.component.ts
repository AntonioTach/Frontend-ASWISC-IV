import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MyServiceNombrePacienteService } from '../../nombre-paciente/my-service-NombrePaciente.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
