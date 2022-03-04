import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-vmessagem',
    templateUrl: './vmessagem.component.html'
})
export class VMessageComponent { 

    @Input() text = '';
}