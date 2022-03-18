import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  //1GGG- fazer essas chamadanos no construtor
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  //1HHH- criando os eventos para alterar o titulo de acordo com a pagina que o usuario esta, depois vá para photo.service.ts
  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map(route => {
        while(route.firstChild) route = route.firstChild;
        return route;
      }))
      .pipe(switchMap(route => route.data))
      .subscribe(event => this.titleService.setTitle(event['title']));
    } 

}
