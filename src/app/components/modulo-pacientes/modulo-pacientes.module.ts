import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPacientesRoutingModule } from './modulo-pacientes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ModuloPacientesComponent } from './modulo-pacientes.component';
import { InicioPacientesComponent } from './inicio-pacientes/inicio-pacientes.component';
import { NavbarPacientesComponent } from './navbar-pacientes/navbar-pacientes.component';


@NgModule({
  declarations: [
    ModuloPacientesComponent,
    InicioPacientesComponent,
    NavbarPacientesComponent
  ],
  imports: [
    CommonModule,
    ModuloPacientesRoutingModule,
    SharedModule
  ]
})
export class ModuloPacientesModule { }
