import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss']
})
export class PhotoCommentsComponent implements OnInit {

  //22FF- passando a parte pra ca
  comments$: Observable<PhotoComment[]>;

  //22GG- criando o input
  @Input() photoId: number;

  //23EE- criar o commentForm
  commentForm: FormGroup;

  //22HH- chamando o serviço
  //23DD- charar o formbuilder
  constructor(private photoService: PhotoService, private formBuilder: FormBuilder,private router: Router) { }


  //22II- recebendo os comentarios, depois declara e exporta ele no photo-details.module.ts
  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);

    //23FF- chamar aqui e fazer a validação dos comments
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    })
    
  }

  //24BB- criar o metodo para salar o comentario, depois importar o switchmap laa em cima, depois vá para photo-list-component.ts
  save() {
    const comment = this.commentForm.get('comment').value as string;
    this.comments$ = this.photoService.addComment(this.photoId, comment).pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset();
        alert('Comentário adicionado com sucesso!')
      }))
  }


}
