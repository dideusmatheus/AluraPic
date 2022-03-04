import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate (userNmae: string, password: string){
    return this.http.post(API_URL + '/user/login', {userName: userNmae, password: password})
  }

}
