import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { pagos } from 'src/app/interfaces/pagos';
import { render } from 'creditcardpayments/creditCardPayments';
import { PagosDePacientesService } from './pagos-de-pacientes.service';


// const ELEMENT_DATA: pagos[] = [//array de elementos
//   {nombre:'Hydrogen', monto: 'Hydrogen', fecha: 'Hydrogen'},
//   {nombre:'Hydrogen', monto: 'Hydrogen', fecha: 'Hydrogen'},
//   {nombre:'Hydrogen', monto: 'Hydrogen', fecha: 'Hydrogen'},

// ];
@Component({
  selector: 'app-pagos-de-pacientes',
  templateUrl: './pagos-de-pacientes.component.html',
  styleUrls: ['./pagos-de-pacientes.component.css']
})
export class PagosDePacientesComponent implements OnInit {

  id: any;
  pagos: any;
  total: any = 1;

  id2 = localStorage.getItem('id_especialista');
  constructor(
    private carrito: PagosDePacientesService
  ) {
    let id_especialista = localStorage.getItem('id_especialista')
    this.carrito.getPagos2(id_especialista).subscribe((res: any) => {
      this.pagos = res;
      console.log('data pagos: ', res)
      if (res.length == 0) {
        this.id = 0
      } else {
        this.id = res[0].id_paciente;
      }
      console.log(this.pagos);
      for (let i = 0; i < this.pagos.length; i++) {
        this.total = this.total + this.pagos[i].precio;
        console.log(this.pagos[i].precio);
      }
      this.total = this.total -1;
      console.log(this.total);
      render(
        {
          id: "#payments",
          currency: "MXN",
          value: this.total,
          onApprove: (details) => {
            this.carrito.subirPagos(this.id).subscribe((res) => {
              console.log(res);
            })
            console.log(details);
          }
        }
      )
    }, err => {
      render(
        {
          id: "#payments",
          currency: "MXN",
          value: "1",
          onApprove: (details) => {
            this.carrito.subirPagos(this.id).subscribe((res) => {
              console.log(res);
            })
            console.log(details);
          }
        }
      )
    })
  }

  ngOnInit(): void {
    this.getPagosCarrito2();
  }

  getPagosCarrito2(){
    // console.log(this.id2);
    this.carrito.getPagos2(this.id2.toString()).subscribe((res: any) => {
      var obj = res[0]
      console.log(obj)
    }, err => console.log(err))
  }
}
