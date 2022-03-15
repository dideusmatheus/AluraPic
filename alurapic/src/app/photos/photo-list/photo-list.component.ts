import { PhotoService } from './../photo/photo.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';


  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  //25AA- arrumando as rotas para quando a pagina carregar, ela carregar as fotos de acordo com o link, depois vá para photo-comments.scss
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userName = params['userName'];
      this.photos = this.activatedRoute.snapshot.data['photos'];
    })
  }


  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      this.filter = ''; //essa linha faz com que, quando o usuario usa o filtro e depois clica em load more o filtro vai receber 'vazio' e vai carregar todas as imagens de novo
      this.photos = this.photos.concat(photos);
      if (!photos.length)
        this.hasMore = false;
    });
  }

}
