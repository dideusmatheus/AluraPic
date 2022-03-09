import { TokenService } from './../token/token.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()


export class RequestInterceptor implements HttpInterceptor{

    //61B- importar o TokenService
    constructor(private tokenService: TokenService){}

    //61A- criar esse metodo
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //62B- fazer uma comparação pra ver se o usuario esta logado
        if(this.tokenService.hasToken()){
            const token = this.tokenService.getToken(); //62B- se eu estiver logado vou pegar o token e colocar na constante token
            req = req.clone({ //62B- depois voce é obrigado a clonar a requisição, modificando a requisição e colocando no cabecalho o x-access-token com o seu token
                setHeaders: {
                    'x-access-token': token //62B- colocando o x-access-token recebendo o valor do token, depois no core.module
                }
            })
        }
        return next.handle(req);
    }

}