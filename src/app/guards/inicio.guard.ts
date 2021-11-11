import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceLoginUsuariosService } from '../components/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class InicioGuard implements CanActivate {

  constructor(
    private loginService: ServiceLoginUsuariosService,
    private router: Router
  ) {  }

  canActivate():boolean{

    if(!this.loginService.esAutorizado()){
      console.log('Token No valido o Expirado');
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

}
