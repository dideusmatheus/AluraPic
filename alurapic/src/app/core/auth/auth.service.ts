import { UserService } from './../user/user.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //46A- importado no userService
  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(userName: string, password: string) {
    //41A - PEGANDO O TOKEN DO USUARIO
    //41A- depois do .pipe(entre a axecução da operação e o subscribe será executado um codigo arbritario) foi utilizado o operador tap para gerar save effect,
    //41A- normalmente usado pra logar no console ou pegar um valor e gravar em algum lugar. O observe response é usada pra ter acesso ao cabeçalho e a tudo que tem direito
    //41A- da resposta, logo quando voce logar com o usuario vai ter o token do usuario
    return this.http.post(API_URL + '/user/login', { userName: userName, password: password }, { observe: 'response' }).pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');
      //42A- SALVANDO O TOKEN        
      //42A- foi criado o token.service com suas funções
      //46B- foi trocado o tokenService por userService (porque serviço do usuario que vai interagir com o tokeService, nao é mais o authService... ele so vai delegar)
      //46B- feito isso vá para userService
      this.userService.setToken(authToken);
      console.log(`User ${userName}: authenticated with token ${authToken}`);
    }))
  }

}
