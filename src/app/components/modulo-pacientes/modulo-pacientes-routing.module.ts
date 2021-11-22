import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPacientesComponent } from './inicio-pacientes/inicio-pacientes.component';
import { ModuloPacientesComponent } from './modulo-pacientes.component';

const routes: Routes = [
  {path:'', component: ModuloPacientesComponent,children:[
   {path:'', component:InicioPacientesComponent},
   {}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPacientesRoutingModule { }
