import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    //52A- importa o serviço abaixo e depois foi criado o metodo de isLogged em user.service
    constructor(private userService: UserService, private router: Router) { }

    //52C- metodo criada pra ajudar na rota, sera necessario criar o metodo geyUserName em user.service.ts e depois vai ate app.routing.module
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.userService.isLogged()) {
            this.router.navigate(['user', this.userService.getUserName()])
            return false;
        }
        return true;
    }



}