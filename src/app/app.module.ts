import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ForgotUsernameComponent } from './forgot-username/forgot-username.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';
import { AuthGuard } from './auth/auth.guard';
import { HttpErrorInterceptorService } from './auth/httperror-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full',canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  // { path: 'login', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
  { path: 'logout', component: LogoutComponent, pathMatch: 'prefix',canActivate:[AuthGuard] },
  { path: 'about', component: AboutComponent, pathMatch: 'prefix'},
  { path: 'contact', component: ContactComponent, pathMatch: 'prefix'},
  { path: 'forgot-username', component: ForgotUsernameComponent, pathMatch: 'full'},
  { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full'},
  { path: 'reset-password', component: ResetPasswordComponent, pathMatch: 'full' },
  { path: 'master', loadChildren: () => import('./masters/masters.module').then((m) => m.MastersModule) },
  { path: 'transaction', loadChildren: () => import('./transactions/transactions.module').then((m) => m.TransactionsModule),canActivate:[AuthGuard] },
  { path: 'report', loadChildren: () => import('./reports/reports.module').then((m) => m.ReportsModule),canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    UserComponent,
    LogoutComponent,
    NavMenuComponent,
    ForgotUsernameComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    MatConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes,{relativeLinkResolution: 'legacy'}),
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    // FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule,
    MaterialModule,
    ToastrModule.forRoot({
      progressBar:true
      
    })

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass:AuthInterceptor,
    //   multi: true
    // }
    // {
    //   provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    //   useValue: { appearance: "fill" },
    // },
    // {
    //   provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    //   useValue: { duration: 2500 }
    // }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents:[MatConfirmDialogComponent],
})
export class AppModule { }
