import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//Guard para Especialistas

import decode from 'jwt-decode';
import { ServiceLoginUsuariosService } from '../components/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaGuard implements CanActivate {

  constructor(
    private loginService : ServiceLoginUsuariosService,
    public router : Router
  ){  }

  canActivate(route : ActivatedRouteSnapshot):boolean{
    //Expected ROLE = 1, 1 es tipo Especialista
    const expectedRole = route.data.expectedRole;

    const token : string | any = localStorage.getItem('token'); //Obtener el Token

    const { id_tipo } : any = decode(token);  //Decodificar y obtener el id_tipo que deberia ser 1

    if(!this.loginService.esAutorizado() || id_tipo !== expectedRole){
      console.log('Usuario no Autorizado');
      this.router.navigateByUrl('/inicio');
      return false;
    }

    return true;
  }

}
