import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MyServiceNombrePacienteService } from '../../nombre-paciente/my-service-NombrePaciente.service';

declare global {
  interface Window{
    Stripe?: any;
  }
}

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
  id_usuario = localStorage.getItem('id_usuario');
  private readonly STRIPE!: any;
  private elementStripe!: any;
  amount: any;
  cardNumber: any;
  cardCvv: any;
  cardExp: any;
  id!: string;
  form: FormGroup = new FormGroup({});
  orderData!: any;

  constructor(
    // private fb: FormBuilder,
    //           // private toaster: Toaster,
    //           private cd: ChangeDetectorRef,
    //           private NombrePService: MyServiceNombrePacienteService, private route: ActivatedRoute
              ) {
                // this.STRIPE = window.Stripe('pk_test_51KvYRzEeE5SQU3ghDDAgZUkUx7FC2SsjuGc9hOPBGLjEWiuxV7JthhHzdeFVhHaV5ysn22DMMGj9zXzL3cmCRjhD00sNAmmgH2');
              }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id') || '';

    // this.form = this.fb.group({
    //   amount: ['', [Validators.required]],
    //   cardNumber: [false, [Validators.required, Validators.requiredTrue]],
    //   cardCvv: [false, [Validators.required, Validators.requiredTrue]],
    //   cardExp: [false, [Validators.required, Validators.requiredTrue]],
    // })

    // this.loadDetail();
    // this.createStripeElement();

  }

  // cargarPaciente() {
  //   this.NombrePService.getPaciente(this.id_usuario).subscribe(
  //     (res: any) => {
  //       var obj = res[0];
  //       this.amount = obj.precio_consulta;
  //     },
  //     (err) => console.log(err)
  //   );
  // }

}
