import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //1AA- construindo o footer, para isso é criado o user$ e importando o Userservice
  user$: Observable<User>;

  constructor(private userService: UserService) { }

  //1BA- a variavel user esta recebendo o user quando ele é iniciado, depois foi criado o template do footer em footer.html
  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

}
