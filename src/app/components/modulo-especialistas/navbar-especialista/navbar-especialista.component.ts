import { Component, OnInit } from '@angular/core';
import { ModuloEspecialistasRoutingModule } from '../modulo-especialistas-routing.module';



@Component({
  selector: 'app-navbar-especialista',
  templateUrl: './navbar-especialista.component.html',
  styleUrls: ['./navbar-especialista.component.css']
})
export class NavbarEspecialistaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ASWISC(){
    console.log('xd');
  }

  btnLogout(){
    console.log('Logout');
  }

}
