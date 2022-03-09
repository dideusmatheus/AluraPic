import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { AuthService } from '../../core/auth/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './singin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        //59E- copiando o codigo a baixo e colando aqui, depois vamos fazer o focus para o signup, vá para o singup.html
        this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService.authenticate(userName, password).subscribe({
            next: () => this.router.navigate(['user', userName]),

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