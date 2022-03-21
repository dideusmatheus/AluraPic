import { ShowIfLoggedModule } from './../shared/directives/show-if-logged/show-if-logged.module';
import { MenuModule } from './../shared/components/menu/menu.module';
import { LoadingModule } from './../shared/loading/loading.module';
import { AlertModule } from './../shared/components/alert/alert.module';

import { FooterComponent } from './footer/footer.component';
import { RequestInterceptor } from './auth/request.interceptor';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AlertModule, //29GG- importar o alertModule depois volte para alert.component.ts
        LoadingModule, //4EEE- importar o loadingmodule e depois vá para header.component.html
        MenuModule, //6CCC- importar o menumodule e depois ir para header.component.html
        ShowIfLoggedModule //7DDD- importando o ShowIfLoggedModule, depois volte para header.component.html
    ],
    declarations: [
        HeaderComponent,
        FooterComponent //1CB- declarando o footer 
    ],
    exports: [
        HeaderComponent,
        FooterComponent, //1CD- exportando o footer, depois vá ate o app.component.html
    ],

    //62C- faça o providers
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})

export class CoreModule { }
