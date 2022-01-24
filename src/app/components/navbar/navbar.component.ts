import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btnInicio(){
    console.log('Inicio');
    this.router.navigateByUrl('/inicio');
  }
  btnLogin(){
    console.log('Inicio');
    this.router.navigateByUrl('/login');
  }
  btnArticulos(){
    console.log('Inicio');
    this.router.navigateByUrl('/articulos');
  }
  aswisciv(){
    console.log('Inicio');
    this.router.navigateByUrl('/aswisc-iv');
  }
  wisciv(){
    console.log('Inicio');
    this.router.navigateByUrl('/wisc-iv');
  }

}
