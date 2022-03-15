import { Component, Input, OnInit, } from '@angular/core';

//11FF- cia uma constante com a url
const CLOUD = 'http://localhost:3000/imgs/';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  //13FF- criando a variavel
  private _url = '';

  @Input() description = '';

  //12FF- altere essa parte de @Input() url=''; , para... e depois criar uma variavel
  @Input() set url(url: string) {
    //15FF- depois faz a comparação, depois vá para photo-form.component.ts
    if (!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }

  //14FF- crie o metodo get
  get url() {
    return this._url;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
