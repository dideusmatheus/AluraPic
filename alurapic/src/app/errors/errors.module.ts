import { RouterModule } from '@angular/router';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { ErrorHandler } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    GlobalErrorComponent //11BBB- declarando o globalerror
  ],
  imports: [
    CommonModule,
    RouterModule //11CCC- importando o routermodule, depois vá para app.routing,module.ts
  ],
  //9BBB- fazendo o providers abaixo, depois volte para o global-error-handler.ts
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler

  }]
})
export class ErrorsModule { }
