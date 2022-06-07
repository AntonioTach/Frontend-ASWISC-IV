import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloEspecialistasComponent } from './modulo-especialistas.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';

//Guards
import { EspecialistaGuard } from 'src/app/guards/especialista.guard';
import { InicioGuard } from 'src/app/guards/inicio.guard';
import { RevisarPacienteComponent } from './revisar-paciente/revisar-paciente.component';
import { InicioEspecialistaComponent } from './inicio-especialista/inicio-especialista.component';
import { ArticulosEspecialistaComponent } from './articulos-especialista/articulos-especialista.component';
import { MisArticulosComponent } from './mis-articulos/mis-articulos.component';
import { PagosDePacientesComponent } from './pagos-de-pacientes/pagos-de-pacientes.component';
import { ModificacionDePreciosComponent } from './modificacion-de-precios/modificacion-de-precios.component';
import { AutomatizacionWiscivComponent } from './automatizacion-wisciv/automatizacion-wisciv.component';
import { SubirPruebaComponent } from './subir-prueba/subir-prueba.component';
import { ModificacionExpedienteComponent } from './modificacion-expediente/modificacion-expediente.component';
import { ElementosDeTerapiaComponent } from './elementos-de-terapia/elementos-de-terapia.component';
import { HorariosComponent } from './horarios/horarios.component';
import { BajaComponent } from './baja/baja.component';
import { NombreComponent } from './nombre/nombre.component';
import { ResultadoAutomatizacionWiscivComponent } from './resultado-automatizacion-wisciv/resultado-automatizacion-wisciv.component';
import { CrearArticulosComponent } from './crear-articulos/crear-articulos.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ModificarArticuloComponent } from './modificar-articulo/modificar-articulo.component';
import { DescargarExpedienteComponent } from './descargar-expediente/descargar-expediente.component';
import { AsignarTareaComponent } from './asignar-tarea/asignar-tarea.component';
import { VerTareaComponent } from './ver-tarea/ver-tarea.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ModificarTareaComponent } from './modificar-tarea/modificar-tarea.component'
const routes: Routes = [
  {
    path: '', component: ModuloEspecialistasComponent, children: [
      { path: '', component: InicioEspecialistaComponent },
      { path: 'registrar-paciente', component: RegistrarPacienteComponent },
      { path: 'revisar-pacientes', component: RevisarPacienteComponent },
      { path: 'articulos-especialista', component: ArticulosEspecialistaComponent },
      { path: 'mis-articulos', component: MisArticulosComponent },
      { path: 'pagos-de-pacientes', component: PagosDePacientesComponent },
      { path: 'modificacion-de-precios', component: ModificacionDePreciosComponent },
      { path: 'automatizacion-wisciv', component: AutomatizacionWiscivComponent },
      { path: 'subir-prueba', component: SubirPruebaComponent },
      { path: 'modificacion-expediente', component: ModificacionExpedienteComponent },
      { path: 'elementos-de-terapia', component: ElementosDeTerapiaComponent },
      { path: 'horarios', component: HorariosComponent },
      { path: 'baja', component: BajaComponent },
      { path: 'nombre', component: NombreComponent },
      { path: 'resultado-automatizacion-wisciv', component: ResultadoAutomatizacionWiscivComponent },
      { path: 'crear-articulos', component: CrearArticulosComponent },
      { path: 'tarjeta', component: TarjetaComponent },
      { path: 'descargar-expediente/:id', component: DescargarExpedienteComponent },
      { path: 'modificar-articulo/:id', component: ModificarArticuloComponent },
      { path: 'modificar-tarea/:id', component: ModificarTareaComponent },
      { path: 'ver-articulo/:id', component: ArticuloComponent },
      { path: 'ver-tarea/:id', component: VerTareaComponent },
      { path: 'asignar-tarea', component: AsignarTareaComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloEspecialistasRoutingModule { }
