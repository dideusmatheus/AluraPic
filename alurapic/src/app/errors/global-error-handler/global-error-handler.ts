
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/user/user.service";
import * as StackTrace from "stacktrace-js";
import { ServerLogService } from "./server-log.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    //9EEE- injetando no construtor e colocando o @injectable 
    constructor(private injector: Injector) {

    }

    //9AAA- criando o error, depois vá para error.module.ts
    handleError(error: any): void {
        //9DDD- melhorando o metodo depois crie o server-log.service.ts
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        //10DDD- faça a linha de baixo
        const serverLogService = this.injector.get(ServerLogService);
        //11EEE- fazendo o router
        const router = this.injector.get(Router);

        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';

        const message = error.message
            ? error.message :
            error.toString();

        //11FFF-direciona para o /error
        router.navigate(['/error']);
        
        //9CCC- fazendo a linha de baixo para mostrar o erro  
        //10EEE- melhorando o metodo abaixo, depois foi criado o global-error, vá para global-error.component.html pra tafaer o template   
        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n')

                console.log(message);
                console.log(stackAsString);
                console.log('o que será enviado para o servidor')
                serverLogService.log({
                    message,
                    url,
                    userName: userService.getUserName(),
                    stack: stackAsString
                }
                ).subscribe({
                    next: () => { console.log('Error logged on server') },
                    error: err => {
                        console.log(err);
                        console.log('Fail to send error log to server');
                    }
                })
            });
    }
}