import { tap } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
import { LoadingService } from './loading.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class LoadingInterceptor implements HttpInterceptor{

    //5AAA- chama o serviço
    constructor(private loadingService: LoadingService){}

    //5BBB- fazer o metodo abaixo, depois vá para loading.module.ts
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     return next
    //             .handle(req)
    //             .pipe(tap(event => {
    //                 if(event instanceof HttpResponse) {
    //                     this.loadingService.stop();
    //                 } else {
    //                     this.loadingService.start();
    //                 }
    //             }))
    
    // }

    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpSentEvent | 
        HttpHeaderResponse | 
        HttpProgressEvent | 
        HttpResponse<any> | 
        HttpUserEvent<any>> {

            return next
                .handle(req)
                .pipe(tap(event => {
                    if(event instanceof HttpResponse) {
                        this.loadingService.stop();
                    } else {
                        this.loadingService.start();
                    }
                }))
    }

}