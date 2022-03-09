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
    component: PhotoFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
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
