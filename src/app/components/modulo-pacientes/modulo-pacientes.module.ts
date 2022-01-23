import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPacientesRoutingModule } from './modulo-pacientes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ModuloPacientesComponent } from './modulo-pacientes.component';
import { InicioPacientesComponent } from './inicio-pacientes/inicio-pacientes.component';
import { NavbarPacientesComponent } from './navbar-pacientes/navbar-pacientes.component';
import { MiEspecialistaComponent } from './mi-especialista/mi-especialista.component';
import { RegistrarseConEspecialistaComponent } from './registrarse-con-especialista/registrarse-con-especialista.component';
import { ArticulosPacientesComponent } from './articulos-pacientes/articulos-pacientes.component';
import { HorariosDisponiblesComponent } from './horarios-disponibles/horarios-disponibles.component';
import { PruebasPacientesComponent } from './pruebas-pacientes/pruebas-pacientes.component';
import { ExpedientePacientesComponent } from './expediente-pacientes/expediente-pacientes.component';
import { ElementosDeTerapiaPacientesComponent } from './elementos-de-terapia-pacientes/elementos-de-terapia-pacientes.component';
import { BajaPacientesComponent } from './baja-pacientes/baja-pacientes.component';
import { PagosPacientesComponent } from './pagos-pacientes/pagos-pacientes.component';
import { NombrePacienteComponent } from './nombre-paciente/nombre-paciente.component';
import { VistaEspecialistaComponent } from './vista-especialista/vista-especialista.component';


@NgModule({
  declarations: [
    ModuloPacientesComponent,
    InicioPacientesComponent,
    NavbarPacientesComponent,
    MiEspecialistaComponent,
    RegistrarseConEspecialistaComponent,
    ArticulosPacientesComponent,
    HorariosDisponiblesComponent,
    PruebasPacientesComponent,
    ExpedientePacientesComponent,
    ElementosDeTerapiaPacientesComponent,
    BajaPacientesComponent,
    PagosPacientesComponent,
    NombrePacienteComponent,
    VistaEspecialistaComponent
  ],
  imports: [
    CommonModule,
    ModuloPacientesRoutingModule,
    SharedModule
  ]
})
export class ModuloPacientesModule { }
