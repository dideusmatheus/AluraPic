import { Directive } from "@angular/core";
import { Photo } from "../../photo/photo";
import { Input } from "@angular/core";

@Directive({
    selector :'[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective {

    //28AA- criar o parametro do dono da foto, depois declara a directive em photo-details.module.ts
    @Input() ownedPhoto: Photo;


}