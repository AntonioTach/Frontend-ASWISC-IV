import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloEspecialistasComponent } from './modulo-especialistas.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';

//Guards
import { EspecialistaGuard } from 'src/app/guards/especialista.guard';
import { InicioGuard } from 'src/app/guards/inicio.guard';
import { RevisarPacienteComponent } from './revisar-paciente/revisar-paciente.component';
import { InicioEspecialistaComponent } from './inicio-especialista/inicio-especialista.component';
import { ArticulosComponent } from '../articulos/articulos.component';
import { ArticulosEspecialistaComponent } from './articulos-especialista/articulos-especialista.component';

const routes: Routes = [
  { path:'',component: ModuloEspecialistasComponent, children: [
    { path: '', component: InicioEspecialistaComponent },
    { path: 'registrar-paciente', component: RegistrarPacienteComponent },
    { path: 'revisar-pacientes', component: RevisarPacienteComponent },
    {path: 'articulos-especialista', component: ArticulosEspecialistaComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloEspecialistasRoutingModule { }
