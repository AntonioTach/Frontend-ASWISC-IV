import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PruebasService } from '../pruebas-pacientes/pruebas.service';

@Component({
  selector: 'app-ver-prueba',
  templateUrl: './ver-prueba.component.html',
  styleUrls: ['./ver-prueba.component.css']
})
export class VerPruebaComponent implements OnInit {
  id: any;
  prueba: any;
  nombre_prueba: any;
  comentarios: any;
  url: any;
  constructor(private pruebasService: PruebasService, private Router: ActivatedRoute) { }

  ngOnInit(): void {
    this.Router.params.subscribe(res => {
      this.id = res['id'];
      console.log(this.id);
      this.pruebasService.getPrueba(this.id).subscribe(res => {
        this.prueba = res[0];
        this.nombre_prueba = this.prueba.nombre_prueba;
        this.comentarios = this.prueba.comentarios;
        this.url = this.prueba.documento;
        console.log(this.prueba);
      }, err => { console.log(err) })
    })

  }
  goto_url() {
    window.open(this.url, "_blank");
  }
}
