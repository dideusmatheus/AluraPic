
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //46C- criação o userSubject e depois da interface User, para ser usada no <User> do Subject 
  //49A- foi trocado o Subject por BehaviorSubject porque ao logar o nome do usuario no header nao aparecia e com isso o problema foi resolvido, feito isso vai para header.component.hyml
  private userSubject = new BehaviorSubject<User>(null);
  //52D- criando para receber o userName
  private userName: string;

  //45A- criado o tokenService
  constructor(private tokenService: TokenService) {

    //47C- se o usuaraio tiver token ele faz o decodeAndNotify, depois foi feito o getUser
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  //45B- criação dos metodos a baixo (setToken e getUser)
  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify(); // 47A- chamou a função aqui
  }

  //47D- quem chamar essa função vai receber um observable e depois pode fazer um subscribe, agora altera o header.component pra exibir o usuario logado
  getUser() {
    return this.userSubject.asObservable();
  }

  //47A- importou o jtw e criou do decodeAndNotify
  private decodeAndNotify() {
    const token = this.tokenService.getToken(); //47A- pega o token que ta salvo 
    const user = jwt_decode(token) as User; //47A- decodifica o token, pegar o valor dele e transforma em um tipo user 
    this.userName = user.name;
    this.userSubject.next(user); //47A- imiti ele atravez so userSubject
    //47B- quando fechar a plicação e abrir de novo nao sera realizado as funções acima, para isso deve chamar elas no construtor acima
  }

  //51A- LOGOUT
  //51B - primeiro vai remover o token e depois colocar null, feito isso vá ate header.component.ts
  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }


  //52B- metodo para verificar se esta logado, depois volte para auth.guard.ts
  isLogged() {
    return this.tokenService.hasToken();
  }

  // 52D- criando o metodo
  getUserName(){
    return this.userName;
  }

}
