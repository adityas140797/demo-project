import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutesModule } from './project-routes.module';
import { ProjectComponent } from './project.component';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutesModule
  ],
  declarations: [
    ProjectComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent
  ]
})
export class ProjectModule { }
