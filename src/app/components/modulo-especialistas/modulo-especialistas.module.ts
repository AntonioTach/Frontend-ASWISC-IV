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
import { PagosDePacientesComponent } from './pagos-de-pacientes/pagos-de-pacientes.component';
import { ModificacionDePreciosComponent } from './modificacion-de-precios/modificacion-de-precios.component';
import { AutomatizacionWiscivComponent } from './automatizacion-wisciv/automatizacion-wisciv.component';
import { ElementosDeTerapiaComponent } from './elementos-de-terapia/elementos-de-terapia.component';
import { HorariosComponent } from './horarios/horarios.component';
import { BajaComponent } from './baja/baja.component';
import { NombreComponent } from './nombre/nombre.component';
import { SubirPruebaComponent } from './subir-prueba/subir-prueba.component';
import { ModificacionExpedienteComponent } from './modificacion-expediente/modificacion-expediente.component';
import { DialogBorrarPacienteComponent } from './dialog-borrar-paciente/dialog-borrar-paciente.component';


@NgModule({
  declarations: [
    ModuloEspecialistasComponent,
    MisArticulosComponent,
    RegistrarPacienteComponent,
    RevisarPacienteComponent,
    NavbarEspecialistaComponent,
    InicioEspecialistaComponent,
    ArticulosEspecialistaComponent,
    PagosDePacientesComponent,
    ModificacionDePreciosComponent,
    AutomatizacionWiscivComponent,
    ElementosDeTerapiaComponent,
    HorariosComponent,
    BajaComponent,
    NombreComponent,
    SubirPruebaComponent,
    ModificacionExpedienteComponent,
    DialogBorrarPacienteComponent,
  ],
  imports: [
    CommonModule,
    ModuloEspecialistasRoutingModule,
    SharedModule
  ]
})
export class ModuloEspecialistasModule { }
