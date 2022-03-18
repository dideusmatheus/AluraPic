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
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGuard] //19BB- adiciona essa linha de comando para a rota p/add, depois foi criado um component chamado photo-details, vá para photo.module.ts
  },
  {
    path: 'p/:photoId', //19DD- criar essa rota, usando o :photoId como coringa (para acessar a rota do id da imagem quando clicado), para isso vá ate photo-list-module.ts
    component: PhotoDetailsComponent,
  },
  {
    path: 'not-found', //33AA- criando essa rota 
    component: NotFoundComponent
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
