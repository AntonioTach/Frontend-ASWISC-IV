import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroPacienteComponent } from './components/registro-paciente/registro-paciente.component';
import { RegistroEspecialistaComponent } from './components/registro-especialista/registro-especialista.component';


import { ReactiveFormsModule } from '@angular/forms';
import { ServiceRegistroEspecialistaService } from './components/registro-especialista/service-registro-especialista.service';

import { ArticulosComponent } from './components/articulos/articulos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ModuloPacientesComponent } from './components/modulo-pacientes/modulo-pacientes.component';

//Providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Navbar3Component } from './components/navbar3/navbar3.component';
//import { TokenInterceptorService } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    LoginComponent,
    RegistroPacienteComponent,
    RegistroEspecialistaComponent,
    Navbar2Component,
    ArticulosComponent,
    PageNotFoundComponent,
    Navbar3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [

    ServiceRegistroEspecialistaService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    //Token interceptor
    //{ provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorService, multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
