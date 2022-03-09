import { SingupService } from './singup.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';


@Injectable()
export class UserNotTakenValidatorService {

  //57C- usar o singupservice
  constructor(private signUpService: SingupService) { }

  //57D- criar o metodo que ao ser chamado me retora uma função de validação, depois invejtar esse service em singupcomponent.ts
  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName =>
          this.signUpService.checkUserNameTaken(userName)
        ))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
        .pipe(first());
    }
  }
}
