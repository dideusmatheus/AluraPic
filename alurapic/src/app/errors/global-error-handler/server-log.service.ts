import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';
import {Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

//10CCC- atribuindo o local host a api
const API = environment.serverLog;

@Injectable({ providedIn: 'root'})
export class ServerLogService {

    //10AAA- chamar o http client e depois criar a interface de error
    constructor(private http: HttpClient) {}

    //10CCC- criando o metodo, depois volte pra global-error-handler.ts
    log(serverLog: ServerLog) {

        return this.http.post(`${API}infra/log`, serverLog);

    }

}