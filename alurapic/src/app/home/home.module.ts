import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessagem.module';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../home/singin/singin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [ CommonModule, 
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
     ]
})
export class HomeModule { }