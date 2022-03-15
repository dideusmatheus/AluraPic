import { VMessageModule } from './../../shared/components/vmessage/vmessagem.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoModule } from './../photo/photo.module';
import { NgModule } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent //22JJ- chamando ele aqui
    ],
    exports: [
        PhotoDetailsComponent,
        PhotoCommentsComponent //22JJ- chamando ele aqui, depois faz a chamda ele no photo-details.component.html
    ],
    imports: [
        CommonModule,
        PhotoModule, //21EE- importando o modulo depois volte para photo-detials.component.ts para arrumar o erro
        RouterModule, //23BB- importando o RouterModule
        ReactiveFormsModule, //23CC- importar o ReactiveFormsModule, depois vá para photo-comments.component.ts
        VMessageModule //23HH- importar o vmensage, depois volte para photo-comments.component.html
    ]
})
export class PhotoDetailsModule {

}