import { AuthService } from './../../core/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './singin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });


    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService.authenticate(userName,password).subscribe(
            () => this.router.navigate(['user', userName]),
            err => {
                console.log(err);
                this.loginForm.reset();
                this.userNameInput.nativeElement.focus();
                alert('Invaid user name or password');
            }
        )
    }

}