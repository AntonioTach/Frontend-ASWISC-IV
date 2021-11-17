import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloEspecialistasComponent } from './modulo-especialistas.component';

const routes: Routes = [
  {path:'',component: ModuloEspecialistasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloEspecialistasRoutingModule { }
