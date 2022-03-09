import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlatformDetectorService {

  //40A- Utilizado para detectar qual plataforma a aplicação está rodando, para isso foi importado o PlATFORM_ID e ele é um token que permite injetar um cara especifico
  
  constructor(@Inject(PLATFORM_ID) private platformId: string) { }

  //40B- criar o metodo para verificar se esta no nabegador ou nao (para isso vai retornar V ou F)
  isPlatformBrowser(){
    return isPlatformBrowser(this.platformId);
  }

}
