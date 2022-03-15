import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { Router } from '@angular/router';
import { SingupService } from './singup.service';
import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validators';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  providers: [UserNotTakenValidatorService],
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  //52C- criando o:
  singupForm: FormGroup;
  //59G- para fazer o focus, deve usar o @ViewChild('inputEmail')
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,//52D- incluindo o formBuilder
    private userNotTakenValidatorService: UserNotTakenValidatorService,//57E- importando o userNotTakenValidatorService
    private singupService: SingupService,//58D- importar o singupService
    private router: Router,
    private platformDetectorService: PlatformDetectorService //59H- importanto o PlatformDetectorService
  ) { }

  //52E- montar o formulario e suas validações
  ngOnInit() {
    this.singupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          //Validators.pattern(/^[a-z0-9_\-]+$/), //52F- validação feita por uma espressao regular, onde o userName so pode começar com letras minuscula e pode ter numero no final e depois vai para o singup.html
          lowerCaseValidator, // validação feita a mão
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        //57F- chamar o validator assincrono aqui, como o 3 parametro e depois coloque a mengem de verificação no singup.html
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ]
    });

    //59I- copiando o codigo para realizar o focus no email ao iniciar, depois vamos fazer a impleentação do Lazy loading... vá para app.rount.module.ts
    //this.platformDetectorService.isPlatformBrowser() && this.emailInput.nativeElement['focus()'];
  }


  //58- SUBMISSÃO DOS DADOS
  singup() {
    //58A- com essa linha de comando voce recebe um objetivo js com todas propriedade a cima com os valores que voce recebeu no formulario, depois disso foi feito uma interface
    const newUser = this.singupForm.getRawValue() as NewUser;
    //58E- .... , feito isso foi criado o component home.component e seu template no html
    this.singupService.singup(newUser)
      .subscribe({
        next: () =>
          this.router.navigate([''])
        ,
        error: (err) => console.log(err)
      }
      );
  }

}
