import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceLoginUsuariosService } from '../components/login/login.service';

//Guard Para Pacientes

import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class PacienteGuard implements CanActivate {

  constructor(
    private loginService : ServiceLoginUsuariosService,
    public router : Router
  ){  }

  canActivate(route : ActivatedRouteSnapshot):boolean{
    //Expected ROLE = 2, 2 es Paciente
    const expectedRole = route.data.expectedRole;
    const token : string | any = localStorage.getItem('token');

    ///console.log(decode(token)); //Decodificar el token obtener Usuario y id_tipo

    const { id_tipo } : any = decode(token);  //Obtener id_tipo si es 2, significa que es paciente


    if(!this.loginService.esAutorizado() || id_tipo !== expectedRole){
      console.log('Usuario no Autorizado');
      this.router.navigateByUrl('/inicio');
      return false;
    }

    return true;
  }

}
