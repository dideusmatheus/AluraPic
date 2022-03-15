
import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../../shared/components/vmessage/vmessagem.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, //1CF- importar o reactive forms
    VMessageModule, //1CG- importar tambem o vmessage, vá para phot-form.html
    RouterModule, //9FF- chamar o routermodule e depois volte para photo-form.component.ts
    PhotoModule, //17FF- importando o photo module e depois voltei para photo-form.component.ts
    ImmediateClickModule //18CC- importar esse modulo, depois vá para photo-form.component.html
  ]
})

export class PhotoFormModule { }
