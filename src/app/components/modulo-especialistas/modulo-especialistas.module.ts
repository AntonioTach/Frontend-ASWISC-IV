import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloEspecialistasRoutingModule } from './modulo-especialistas-routing.module';
import { ModuloEspecialistasComponent } from './modulo-especialistas.component';
import { Navbar2Component } from '../navbar2/navbar2.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { MisArticulosComponent } from './mis-articulos/mis-articulos.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { RevisarPacienteComponent } from './revisar-paciente/revisar-paciente.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ModuloEspecialistasComponent,
    InicioComponent,
    NavbarComponent,
    ArticulosComponent,
    MisArticulosComponent,
    RegistrarPacienteComponent,
    RevisarPacienteComponent
  ],
  imports: [
    CommonModule,
    ModuloEspecialistasRoutingModule,
    SharedModule
  ]
})
export class ModuloEspecialistasModule { }
