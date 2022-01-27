import { Component, OnInit } from '@angular/core';
import { PagosPacientesService } from './pagos-pacientes.service';

@Component({
  selector: 'app-pagos-pacientes',
  templateUrl: './pagos-pacientes.component.html',
  styleUrls: ['./pagos-pacientes.component.css']
})
export class PagosPacientesComponent implements OnInit {

  id: any;
  pagos: any[];
  total: any = 1;

  constructor(
    private carrito: PagosPacientesService
  ) { }

  ngOnInit(): void {
    this.traerPagos()
  }

  traerPagos(): void {
    //@TODO: Cambuar id_usuario por id paciente
    let id_paciente = localStorage.getItem('id_usuario')
    this.carrito.getPagosHechos(id_paciente).subscribe((res: any) => {
      this.pagos = res;
      if (res.length == 0) {
        this.id = 0
      } else {
        this.id = res[0].id_paciente;
      }
      for (let i = 0; i < this.pagos.length; i++) {
        this.total = this.total + this.pagos[i].precio;
      }
      this.total = this.total -1;
    }, err => console.log(err))
  }

}
