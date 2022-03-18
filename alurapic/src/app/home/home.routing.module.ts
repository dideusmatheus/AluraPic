import { LoginGuard } from './../core/auth/login.guard';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    //60B- foi importao isso tudo na rota de home, depois temos uns pequenos passos na aula da alura, Angular parte 2 - 5. Feito isso avamos fazer o request.interceptor.ts
    {
        path: '',
        component: HomeComponent, //59B- foi criado essa nota rota, com o homeComponent
        canActivate: [LoginGuard],//52D- coloque o canActivate: [AuthGuard], feito isso vá para header.html para fazer a rota de login
        children: [ // 59C- o signin e signup foi passado para as rotas children (o home e o signin tem o mesmo path porque os dois que seram mostrados primeiramente, depois vá ate singin.html)
            {
                path: '',
                component: SignInComponent,
                data: { //1EEE- fazendo o title pra essa rota
                    title: 'Sing in'
                }
            },
            {
                path: 'singup',
                component: SingupComponent, //55B- rota feita para o singup, depois vamos mexer no singup.ts
                data: { //1FFF- fazendo o title pra essa rota, depois precisamos interagir com o angula pra saber qual rota está, para isso vá para app.component.ts
                    title: 'Sing up'
                }
            },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes) //todo module criado com o lazy loading deve ser usado o forChild
    ],
    exports: [RouterModule]

})

export class HomeRoutingModule {


}
