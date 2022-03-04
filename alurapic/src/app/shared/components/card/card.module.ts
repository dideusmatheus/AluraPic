import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [CommonModule]
})

// criamos o card em modulo para que ele seja importado em outros lugares, visto que um component nao pode ser importado em varios lugares. Transformando ele em modulo ele pode
// usado nos outros modulos

export class CardModule { }
