import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    render(
      {
        id: "#payments",
        currency: "USD",
        value: "100.00",
        onApprove: (details) => {
          console.log(details);
        }
      }
    )
  }

}
