import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloPacientesComponent } from './modulo-pacientes.component';

const routes: Routes = [
  {path:'', component: ModuloPacientesComponent,children:[
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPacientesRoutingModule { }
