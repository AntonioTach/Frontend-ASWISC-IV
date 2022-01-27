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

  // displayedColumns: string[] = ['nombre', 'monto', 'fecha'];//columnas
  // dataSource = ELEMENT_DATA;

  id: any;
  pagos: any;
  total: any = 1;

  constructor(private carrito: PagosDePacientesService) {
    this.carrito.getPagos().subscribe((res: any) => {
      this.pagos = res;
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
  }

  // agregartarjeta(){
  //   console.log('Agregar Tarjeta');
  //   this.router.navigateByUrl('/modulo-especialistas/tarjeta');
  // }

}
