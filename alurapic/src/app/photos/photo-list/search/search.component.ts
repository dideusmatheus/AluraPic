import { debounceTime } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  // para a criação do evento em photo-list.component, ele deve ter o mesmo nome da variavel declarada a baixo, depois ele vaireceber um novo evento (EventEmitter) do tipo string
  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string='';
  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
