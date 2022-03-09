import { SingupService } from './singup/singup.service';
import { HomeRoutingModule } from './home.routing.module';
import { SingupComponent } from './singup/singup.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessagem.module';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../home/singin/singin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        SignInComponent,
        SingupComponent,
        HomeComponent],
    imports: [CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SingupService
    ]
})
export class HomeModule { }