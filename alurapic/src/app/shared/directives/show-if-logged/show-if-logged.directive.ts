import { ElementRef } from '@angular/core';
import { UserService } from './../../../core/user/user.service';
import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  //33DD- chamar os serviços a baixo, depois vá para photo-details.comonent.html
  constructor(
    private renderer: Renderer2,
    private userService: UserService,
    private element: ElementRef<any>
    ) { }


  //33CC- fazendo a comparação se o usuario nao estiver logado não vai aparecer os likes
  ngOnInit(): void {
    (!this.userService.isLogged() && this.renderer.setStyle(this.element.nativeElement, 'display', 'none'));

  }


}
