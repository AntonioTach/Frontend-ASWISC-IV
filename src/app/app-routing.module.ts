import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  // { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  // { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'inicio', component: LoginComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
