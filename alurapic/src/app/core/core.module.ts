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
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent //1CB- declarando o footer 
    ],
    exports: [
        HeaderComponent,
        FooterComponent //1CD- exportando o footer, depois vá ate o app.component.html
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
