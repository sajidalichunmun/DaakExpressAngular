import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes = [
  { path: '', component: SignInComponent, pathMatch: 'full'},
  { path: 'login1', component: SignInComponent, pathMatch: 'full'},
  { path: 'register', component: SignUpComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
  ]
})
export class UserModule { }
