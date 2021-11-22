import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModuloEspecialistasRoutingModule } from './modulo-especialistas-routing.module';
import { ModuloEspecialistasComponent } from './modulo-especialistas.component';
import { MisArticulosComponent } from './mis-articulos/mis-articulos.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { RevisarPacienteComponent } from './revisar-paciente/revisar-paciente.component';
import { NavbarEspecialistaComponent } from './navbar-especialista/navbar-especialista.component';
import { InicioEspecialistaComponent } from './inicio-especialista/inicio-especialista.component';

import { SharedModule } from '../shared/shared.module';
import { ArticulosEspecialistaComponent } from './articulos-especialista/articulos-especialista.component';


@NgModule({
  declarations: [
    ModuloEspecialistasComponent,
    MisArticulosComponent,
    RegistrarPacienteComponent,
    RevisarPacienteComponent,
    NavbarEspecialistaComponent,
    InicioEspecialistaComponent,
    ArticulosEspecialistaComponent,
  ],
  imports: [
    CommonModule,
    ModuloEspecialistasRoutingModule,
    SharedModule
  ]
})
export class ModuloEspecialistasModule { }
