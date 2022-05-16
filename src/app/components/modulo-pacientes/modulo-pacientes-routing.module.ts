import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosPacientesComponent } from './articulos-pacientes/articulos-pacientes.component';
import { BajaPacientesComponent } from './baja-pacientes/baja-pacientes.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ElementosDeTerapiaPacientesComponent } from './elementos-de-terapia-pacientes/elementos-de-terapia-pacientes.component';
import { ExpedientePacientesComponent } from './expediente-pacientes/expediente-pacientes.component';
import { HorariosDisponiblesComponent } from './horarios-disponibles/horarios-disponibles.component';
import { InicioPacientesComponent } from './inicio-pacientes/inicio-pacientes.component';
import { MiEspecialistaComponent } from './mi-especialista/mi-especialista.component';
import { ModuloPacientesComponent } from './modulo-pacientes.component';
import { NombrePacienteComponent } from './nombre-paciente/nombre-paciente.component';
import { PagosPacientesComponent } from './pagos-pacientes/pagos-pacientes.component';
import { PruebasPacientesComponent } from './pruebas-pacientes/pruebas-pacientes.component';
import { RegistrarseConEspecialistaComponent } from './registrarse-con-especialista/registrarse-con-especialista.component';
import { TareaComponent } from './tarea/tarea.component';
import { VerPruebaComponent } from './ver-prueba/ver-prueba.component';
import { VistaEspecialistaComponent } from './vista-especialista/vista-especialista.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { StripeComponent } from './horarios-disponibles/stripe/stripe.component';

const routes: Routes = [
  {
    path: '', component: ModuloPacientesComponent, children: [
      { path: '', component: InicioPacientesComponent },
      { path: 'registrarse-con-especialista', component: RegistrarseConEspecialistaComponent },
      { path: 'pruebas-pacientes', component: PruebasPacientesComponent },
      { path: 'pagos-pacientes', component: PagosPacientesComponent },
      { path: 'mi-especialista', component: MiEspecialistaComponent },
      { path: 'horarios-disponibles', component: HorariosDisponiblesComponent },
      { path: 'expediente-pacientes', component: ExpedientePacientesComponent },
      { path: 'elementos-de-terapia-pacientes', component: ElementosDeTerapiaPacientesComponent },
      { path: 'baja-expedientes', component: BajaPacientesComponent },
      { path: 'articulos-pacientes', component: ArticulosPacientesComponent },
      { path: 'baja-pacientes', component: BajaPacientesComponent },
      { path: 'nombre-paciente', component: NombrePacienteComponent },
      { path: 'vista-especialista/:id', component: VistaEspecialistaComponent },
      { path: 'ver-prueba/:id', component: VerPruebaComponent },
      { path: 'ver-articulo/:id', component: ArticuloComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'ver-tarea/:id', component: TareaComponent },
      { path: '**', component: ModuloPacientesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPacientesRoutingModule { }
