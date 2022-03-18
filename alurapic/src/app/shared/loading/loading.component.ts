import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  //4BBB- criar o observable 
  loading$: Observable<string>;

  //4AAA- chamand o service
  constructor(private loadingService: LoadingService) { }

  //4CCC- fazer o loading$ receber o getloading, depois vá para o loading.component.html
  ngOnInit() {
    this.loading$ = this.loadingService.getLoading().pipe(map(loadingType => loadingType.valueOf()));
  }

}
