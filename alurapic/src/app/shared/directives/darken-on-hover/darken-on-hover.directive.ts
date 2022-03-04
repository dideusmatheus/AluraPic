import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  // o elementref serve para pegar o elemento do DOM que a directiva esta adicionada, e te dar a referencia para que voce possa manibular
  // o elementref é uma casquinha sobre o elemento do DOM
  constructor(private el: ElementRef, private render: Renderer2) { }

  //o host listener serve pra pegar o eveto da diretiva e colocar no elemento hospedeiro
  @HostListener('mouseover') // mouse over é quando passa o mouse por cima do elemento
  darkenOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(80%)');
  }

  @HostListener('mouseleave') // mouse leave é quando nao passa o mouse por cima do elemento
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }


}
