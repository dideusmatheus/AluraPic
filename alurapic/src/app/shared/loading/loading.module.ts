import { LoadingInterceptor } from './loading.interceptor';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
    declarations: [LoadingComponent],
    exports: [LoadingComponent],
    imports: [CommonModule],
    //5DDD- fazer o providers, depois vai ser criado o menu, vá para menu.component.ts
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true
    }]
})

export class LoadingModule {}