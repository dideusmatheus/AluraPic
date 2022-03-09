import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = "http://localhost:3000";

@Injectable()

export class SingupService {

  //57A- utilizando o httpclient e criando a const API_URL
  constructor(private http: HttpClient) {
  }

  //57B- criando o metodo para verificar se o usuaraio ja existe no bd, depois foi criado o user-not-token.ts
  checkUserNameTaken(userName: string) {
    return this.http.get(`${API_URL}/user/exists/${userName}`);
  }

  //58C- crie o metodo singup, depois voltei para singup.componente.ts
  singup(newUser: NewUser){
    return this.http.post(`${API_URL}/user/signup`, newUser);
  }

}