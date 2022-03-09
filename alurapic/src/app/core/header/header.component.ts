import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //48A - cria a propiedade ($ usado para observable)
  user$: Observable<User>;
  
  //48B- faça essa parte e coloque {{ user?;name}} no template do header
  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();
   }

  ngOnInit() {
  }

  //51C- chama a função do user service e retireciona para pagina principal, feito isso vai ser adicionado o logtou no html
  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }

}
