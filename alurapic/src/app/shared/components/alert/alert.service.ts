import { NavigationStart, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AlertType, Alert } from "./alert";


@Injectable({ providedIn: 'root' })
export class AlertService {

    //29CC- criando uma variavel do tipo subject que imite um alert
    alertSubject: Subject<Alert> = new Subject<Alert>();
    //31CC- criar uma propriedade 
    keepAfterRouteChange = false;

    //31FF- chama o router no constructor e fazer a comparação a baixo
    constructor(private router: Router){

        this.router.events.subscribe(event => {
            //31FF- se o é uma instancia do  NavigationStart é porque ta gerando uma nova navegação
            if( event instanceof NavigationStart){
                //31FF- se é pra manter o keep voce volta ele para o padrao, false 
                if(this.keepAfterRouteChange){
                    this.keepAfterRouteChange = false;
                } else {
                    //31FF- vai emitir null, ou seja, vai chegar um objeto no valor null e se tiver null nao vai ter dados e nada sera exibido
                    this.clear();
                }
            }
        })
    }

    //29FF- criando o metodo success
    //31DD- adicionando o keepAfterRouteChange = false; em todas as mensagens
    success(message: string, keepAfterRouteChange: boolean = false) {
        this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
    }
    //29FF- criando o metodo warning
    //31DD- adicionando o keepAfterRouteChange = false; em todas as mensagens
    warning(message: string, keepAfterRouteChange: boolean = false) {
        this.alert(AlertType.WARNING, message, keepAfterRouteChange);
    }
    //29FF- criando o metodo danger
    //31DD- adicionando o keepAfterRouteChange = false; em todas as mensagens
    danger(message: string, keepAfterRouteChange: boolean = false) {
        this.alert(AlertType.DANGER, message, keepAfterRouteChange);
    }
    //29FF- criando o metodo info, depois vá para core.module para importar o alert
    //31DD- adicionando o keepAfterRouteChange = false; em todas as mensagens
    info(message: string, keepAfterRouteChange: boolean = false) {
        this.alert(AlertType.INFO, message, keepAfterRouteChange);
    }


    //29DD- criando o metodo alertType
    //31EE- coloquei o , keepAfterRouteChange: boolean aqui e faça o this.keep receber o valor que vou passar no paramatro da função alert, depois chamar o router no constructor
    private alert(alertType: AlertType, message: string, keepAfterRouteChange: boolean) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.alertSubject.next(new Alert(alertType, message));
    }

    //29EE- criando o metodo get
    getAlert() {
        return this.alertSubject.asObservable();
    }

    //31GG- criando o metodo clear, depois vá para  photo-details.component.ts
    clear(){
        this.alertSubject.next(null);
    }

}