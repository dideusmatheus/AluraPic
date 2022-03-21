import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { AuthService } from '../../core/auth/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './singin.component.html'
})
export class SignInComponent implements OnInit {

    //12DDD- criar a variavel
    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef;

    //12CCC- injetar o activaterout
    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        //12EEE- incluir a linha de codigo abaixo
        this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params['fromUrl']);

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    //59E- copiando o codigo a baixo e colando aqui, depois vamos fazer o focus para o signup, vá para o singup.html
    ngAfterViewInit() {
        this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService.authenticate(userName, password).subscribe({
            next: () => {
                //12FFF- faz a comparação
                this.fromUrl
                    ? this.router.navigateByUrl(this.fromUrl)
                    : this.router.navigate(['user', userName]);
            },

            error: err => {
                console.log(err);
                this.loginForm.reset();
                //40C- usando a função criada, caso isPlatform for verdadeiro ele vai executar o focus, se for falso ele nao vai acontecer nada
                this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
                alert('Invaid user name or password');
            }
        })
    }

}