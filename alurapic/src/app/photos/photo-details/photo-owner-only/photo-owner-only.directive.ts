import { UserService } from './../../../core/user/user.service';
import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { Photo } from "../../photo/photo";
import { Input } from "@angular/core";

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

    //28AA- criar o parametro do dono da foto, depois declara a directive em photo-details.module.ts
    @Input() ownedPhoto: Photo;

    //28DD- fazer os chamados abaixo
    constructor(private element: ElementRef<any>, private renderer: Renderer2, private userService: UserService) {
    }

    //28EE- verificar se o usuario logado é igual da foto, para poder liberar o botao de deletar foto ... depois foi criado um novo component chamado alert e vá para alert.ts
    ngOnInit(): void {
        this.userService.getUser().subscribe(user => {
            //comparação se o usuario é diferente ao logado
            if(!user || user.id != this.ownedPhoto.userId){
                this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
            }
        })
    }


}