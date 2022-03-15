import { PlatformDetectorService } from './../../../core/platform-detector/platform-detector.service';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  //18AA- trazendo o elementref
  constructor(private element: ElementRef<any>, private platformDetector: PlatformDetectorService) { }


  // 18BB- chamando as funções dentro no ngoninit pra usar assim que a diretiva for criada, depois vá para photo-form.module.tts
  ngOnInit(): void {
    this.platformDetector.isPlatformBrowser && this.element.nativeElement.click();
  }


}
