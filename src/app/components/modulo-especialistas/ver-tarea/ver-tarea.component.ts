import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubirPruebaService } from '../subir-prueba/subir-prueba.service';

@Component({
  selector: 'app-ver-tarea',
  templateUrl: './ver-tarea.component.html',
  styleUrls: ['./ver-tarea.component.css']
})
export class VerTareaComponent implements OnInit {
  titulo: any;
  comentarios: any;
  url: any;

  constructor(private service: SubirPruebaService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      const id = res['id'];
      this.service.getTarea(id).subscribe(res => {
        const obj = res[0];
        this.titulo = obj.titulo;
        this.comentarios = obj.descripcion;
        this.url = obj.documento;
      })
    })

  }
  goto_url() {
    window.open(this.url, "_blank");
  }

}
