import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { CarritoService } from './carrito.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  id: any;
  pagos: any;
  total: any = 1;

  constructor(private carrito: CarritoService) {
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

}
