import { Component, OnInit } from '@angular/core';
import { EspecialistaServiceService } from './especialista-service.service';

@Component({
  selector: 'app-modulo-especialistas',
  templateUrl: './modulo-especialistas.component.html',
  styleUrls: ['./modulo-especialistas.component.css']
})
export class ModuloEspecialistasComponent implements OnInit {

  constructor(private especialistaService: EspecialistaServiceService) {
    especialistaService.getIdEspecialista().subscribe((res) => {
      localStorage.setItem('id_especialista', res.id_especialista);
    })
  }

  ngOnInit(): void {

  }

}
