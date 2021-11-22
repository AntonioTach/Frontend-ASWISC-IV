import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes de Modulo Principal
import { ArticulosComponent } from './components/articulos/articulos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ModuloEspecialistasComponent } from './components/modulo-especialistas/modulo-especialistas.component';
import { ModuloPacientesComponent } from './components/modulo-pacientes/modulo-pacientes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistroEspecialistaComponent } from './components/registro-especialista/registro-especialista.component';
import { RegistroPacienteComponent } from './components/registro-paciente/registro-paciente.component';
//GUARDS
import { EspecialistaGuard } from './guards/especialista.guard';
import { InicioGuard } from './guards/inicio.guard';
import { PacienteGuard } from './guards/paciente.guard';
//Modulo Especialistas
import { ModuloEspecialistasRoutingModule } from './components/modulo-especialistas/modulo-especialistas-routing.module';



const routes: Routes = [
  //Ver Inicio
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro-especialista', component: RegistroEspecialistaComponent },
  { path: 'registro-paciente', component: RegistroPacienteComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'modulo-especialistas', component: ModuloEspecialistasComponent, canActivate:[EspecialistaGuard, InicioGuard], data: { expectedRole: 1 },  loadChildren: () => import('./components/modulo-especialistas/modulo-especialistas.module').then(x => x.ModuloEspecialistasModule)},//loadchildren corregido
  { path: 'modulo-pacientes', component: ModuloPacientesComponent, canActivate:[PacienteGuard, InicioGuard], data: { expectedRole: 2 } , loadChildren: () => import('./components/modulo-pacientes/modulo-pacientes.component').then(x => x.ModuloPacientesComponent)},
  { path: '**', component: PageNotFoundComponent },


  //ver login
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'inicio', component: LoginComponent },
  // { path: '**', redirectTo: 'inicio', pathMatch: 'full' },

  //ver registro Especialista
  // { path: '', redirectTo: 'registro-especialista', pathMatch:  'full'},
  // { path: 'registro-especialista', component: RegistroEspecialistaComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
