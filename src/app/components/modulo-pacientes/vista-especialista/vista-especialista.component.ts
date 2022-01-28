import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialistaService } from './especialista.service';
@Component({
  selector: 'app-vista-especialista',
  templateUrl: './vista-especialista.component.html',
  styleUrls: ['./vista-especialista.component.css']
})
export class VistaEspecialistaComponent implements OnInit {
  id: string = '';
  especialista: any;
  id_usuario: any;
  id_especialista: any;

  constructor(private especialistaService: EspecialistaService, private router: ActivatedRoute, private Router: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.id = res['id'];
      console.log(this.id)
    })
    console.log(this.id);
    this.especialistaService.getEspecialista(this.id).subscribe(res => {
      this.especialista =  res;
      this.id_especialista = this.especialista.id_especialista;
      console.log(this.especialista)
    }, err => console.log(err));
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  updatePaciente() {
    this.id_usuario = localStorage.getItem('id_usuario')
    const idEspecialista = {
      id_especialista: this.id_especialista,
      precio_consulta_general: this.especialista.precio_consulta_general
    }
    this.especialistaService.updatePaciente(this.id_usuario, idEspecialista).subscribe((res: any) => {
      console.log(res);
    }, err => console.log(err));
    this.Router.navigate(['/modulo-pacientes']);
  }
}
