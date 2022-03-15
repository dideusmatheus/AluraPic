import { PhotoComment } from './../photo/photo-comment';
import { Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  //21FF- mude photo: Photo para photo$: Observable<Photo>;
  photo$: Observable<Photo>;
  //22LL- criando o photoId
  photoId: number;


  //22CC- criando o comments$, que vai receber um observable to tipo photocomments e criando um array disso
  //22EE- tirar essa parte e a 22DD e passar diretamente para a do component.ts
  //comments$: Observable<PhotoComment[]>;


  //21BB- chama o photoservice e crie uma propriedade
  //20CC- chamando o route
  //27EE- chama o router
  constructor(private route: ActivatedRoute, private photoService: PhotoService, private router: Router) { }

  //20DD- o id recebe o id da foto que o usuario clicou, o photoId tem que ser o mesmo da rota p/:photoId no app.routing.module.ts, depois vai para photo;service;ts
  ngOnInit() {
    //22LL- alterando aqui para this.photoId
    this.photoId = this.route.snapshot.params['photoId'];
    //21CC- fazer a linha de comando a baixo, depois vá para photo-detalis.component.html
    //this.photoService.findById(id).subscribe( photo => this.photo = photo);

    //21GG- mude a linha de cima para a de baixo, depois volte para photo-details.component.ts
    //22LL- mudando para this.photoId. Feito isso vá para o tempalte dos comentarios em photo-comments.component.html
    this.photo$ = this.photoService.findById(this.photoId);

    //22DD- passando os valores para coments$, depois vai ser criando um component pra listar todos os comentarios 
    //this.comments$ = this.photoService.getComments(photoId);
  }

  //27DD- fazer o metodo remove, mas chamar o router antes logo a cima
  remove() {
    this.photoService.removePhoto(this.photoId).subscribe(() => this.router.navigate(['']));
   }


}
