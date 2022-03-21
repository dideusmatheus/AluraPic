import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //6AAA- criando a variavel
  isShown: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  //6BBB- criando o metodo toggle, depois vá para core.module.ts
  toggle(){
    this.isShown = !this.isShown;
  }

}
