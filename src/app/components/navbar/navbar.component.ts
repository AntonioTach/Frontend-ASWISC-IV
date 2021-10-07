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
    this.router.navigateByUrl('/inicio');
  }
  btnLogin(){
    this.router.navigateByUrl('/login');
  }
  btnArticulos(){
    this.router.navigateByUrl('/articulos');
  }

}
