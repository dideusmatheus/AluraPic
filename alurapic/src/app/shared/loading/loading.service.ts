import { LoadingType } from './loading-type';
import { startWith, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  //3BBB- criando um objeto loading
  loadingSubject: Subject<LoadingType> = new Subject<LoadingType>();

    constructor() { }

    //3CCC- criar o metodo get
    getLoading(){
      return this.loadingSubject.asObservable()
      //3FFF- quando a barra for chamada pela primeira vez ela deve começar como stopped (valor padrao), e para isso é feito a linha de baixo.... depoi vá para loading.component.ts
      .pipe(startWith(LoadingType.STOPPED));
    }

    //3DDD- criar o metodo start
    start(){
      this.loadingSubject.next(LoadingType.LOADING);
    }

    //3EEE- criar o metodo stop
    stop(){
      this.loadingSubject.next(LoadingType.STOPPED);
    }

}
