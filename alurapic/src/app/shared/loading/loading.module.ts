import { LoadingInterceptor } from './loading.interceptor';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
    declarations: [LoadingComponent],
    exports: [LoadingComponent],
    imports: [CommonModule],
    //4DDD- fazer o providers
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true
    }]
})

export class LoadingModule {}