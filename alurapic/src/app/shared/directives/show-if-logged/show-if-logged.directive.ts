import { ElementRef } from '@angular/core';
import { UserService } from './../../../core/user/user.service';
import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  //8AAA- configurando o show-if-logged para ocultar o menu se nao tiver logado, para isso crie a variavel abaixo
  currentDisplay: string;

  //33DD- chamar os serviços a baixo, depois vá para photo-details.comonent.html
  constructor(
    private renderer: Renderer2,
    private userService: UserService,
    private element: ElementRef<any>
    ) { }


  //33CC- fazendo a comparação se o usuario nao estiver logado não vai aparecer os likes
  ngOnInit(): void {
    //8BBB- faz a seguinte parte do codigo 
    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.userService.getUser().subscribe(user => {
            if(user) {
                this.renderer.setStyle(this.element.nativeElement, 'display', this.currentDisplay);
            } else {
                this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
                this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
            }
       });

    //(!this.userService.isLogged() && this.renderer.setStyle(this.element.nativeElement, 'display', 'none'));

  }


}
