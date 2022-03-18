import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { AuthGuard } from './core/auth/auth.guard';

import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { //60A- criar esse path para fazer a lazy loading, para isso foi criado o home.routing.module.ts
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  // { //tirando essas rotas
  //   path: '',
  //   component: HomeComponent, //59B- foi criado essa nota rota, com o homeComponent
  //   canActivate: [AuthGuard],//52D- coloque o canActivate: [AuthGuard], feito isso vá para header.html para fazer a rota de login
  //   children:[ // 59C- o signin e signup foi passado para as rotas children (o home e o signin tem o mesmo path porque os dois que seram mostrados primeiramente, depois vá ate singin.html)
  //     {
  //       path: '',
  //       component: SignInComponent,
  //     },
  //     {
  //       path: 'singup',
  //       component: SingupComponent//55B- rota feita para o singup, depois vamos mexer no singup.ts
  //     },
  //   ]
  // },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    },
    //1AAA- começando a fazer o title mudar de acordo com a rota
    data: {
      title: 'Timeline'
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGuard], //19BB- adiciona essa linha de comando para a rota p/add, depois foi criado um component chamado photo-details, vá para photo.module.ts
    data: { //1BBB- fazendo essa rota ganhar o title abaixo
      title: 'Photo upload'
    }
  },
  {
    path: 'p/:photoId', //19DD- criar essa rota, usando o :photoId como coringa (para acessar a rota do id da imagem quando clicado), para isso vá ate photo-list-module.ts
    component: PhotoDetailsComponent,
    data: { //1CCC- fazendo essa rota ganhar o title abaixo
      title: 'Photo detail'
    }
  },
  {
    path: 'not-found', //33AA- criando essa rota 
    component: NotFoundComponent,
    data: { //1DDD- fazendo essa rota ganhar o title abaixo, depois vá para home.routing.module.ts pra arrumar as rotas de la tambem
      title: 'Not found'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found' //33BB- mudar component: NotFoundComponent para ... depois volte para photo-details.component.ts
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]

})

export class AppRoutingModule {


}
