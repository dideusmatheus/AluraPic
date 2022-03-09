import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  
  //42B- função do token, depois foi criado o header 
  // V ou F caso o token ja existe
  hasToken() {
    return !!this.getToken();
  }

  //42B- função do token
  // salvar o token
  setToken(token) {
    window.localStorage.setItem(KEY, token);
  }

  //42B- função do token
  // retorna o token
  getToken() {
    return window.localStorage.getItem(KEY);
  }

  //42B- função do token
  // remove o token
  removeToken() {
    window.localStorage.removeItem(KEY);
  }

}
