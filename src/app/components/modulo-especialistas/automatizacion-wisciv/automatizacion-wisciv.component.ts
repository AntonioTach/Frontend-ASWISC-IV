import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-automatizacion-wisciv',
  templateUrl: './automatizacion-wisciv.component.html',
  styleUrls: ['./automatizacion-wisciv.component.css']
})
export class AutomatizacionWiscivComponent implements OnInit {

  constructor(private router:Router) { }

  hide = true;
  ngOnInit(): void {
  }
  Automatizacion(){
    console.log('Automatizacion Resultados');
    this.router.navigateByUrl('/modulo-especialistas/resultado-automatizacion-wisciv');
  }

}
