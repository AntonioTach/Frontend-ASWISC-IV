import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroEspecialistaComponent } from './components/registro-especialista/registro-especialista.component';




const routes: Routes = [
  //Ver Inicio
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },

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
