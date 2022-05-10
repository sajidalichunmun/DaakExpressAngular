import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/acount/account.service';
import { LoginResponse } from '../services/acount/dto/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean = false;
  public isLoading: boolean = false;
  
  errors:Error[];
  hasError: boolean = false;

  protected returnUrl: string
  public loginError: string;


  constructor(
              protected formBuilder: FormBuilder, protected router: Router, 
              private accountService: AccountService, protected activeRoute: ActivatedRoute
          ) {
    this.loginForm = this.formBuilder.group({
      email: [{value: 'devsajidali1973@gmail.com', disabled: false}, [Validators.required, Validators.minLength(2)]],
      password: [{value: 'tiger', disabled: false}, [Validators.required, Validators.minLength(2)]]
    })
  }

  ngOnInit(): void {
    this.returnUrl = this.activeRoute.snapshot.queryParams["ReturnUrl"] || "/";
    this.loginError = this.activeRoute.snapshot.queryParams["error"] || null;
  }
  
  get formControls() {
    return this.loginForm.controls;
  }

  get formValue() {
    return this.loginForm.getRawValue();
  }
  submit(): void {
    if(this.loginForm.invalid) return;
    this.submitted = true;
    this.accountService
      .login(this.formValue.email, this.formValue.password, this.returnUrl)
      .subscribe(
        (response) => {
        if(response) {
          localStorage.setItem('token',response['access_token']);
          window.location.replace('/dashboard');
          return;
        }
      });
  }

}