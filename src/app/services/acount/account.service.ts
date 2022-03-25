import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginRequest } from './dto/login-request';
import { LoginResponse } from './dto/login-response';

const apiBaseUrl = environment.apiBaseUrl +'/api';
const routes = {
  login: () => `${apiBaseUrl}/user/login`,
  loginnew: () => `${apiBaseUrl}/user/login`,
  register: () => `${apiBaseUrl}/user/register`,
  getUser: () => `${apiBaseUrl}/user`,
  logout: () => `${apiBaseUrl}/apilogout`,
  forgotUsername: () => `${apiBaseUrl}/apiforgotUsername`,
  forgotPassword: () => `${apiBaseUrl}/apiforgotPassword`,
  resetPassword: () => `${apiBaseUrl}/apiresetPassword`,
}

const noAuthHeader = { headers: new HttpHeaders(
  {
    'content-type': 'application/json', 
    'NoAuth': 'True' 
  }
)};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient, private fb:FormBuilder) { }

  formModel = this.fb.group({
    UserName:['',Validators.required],
    Email:['',Validators.required],
    FullName:[''],
    Passwords:this.fb.group({
      Password:['',[Validators.required,Validators.minLength(4)]],
      ConfirmPassword:['',Validators.required]
    }
    ,{validator: this.comparePasswords}
    )
  });
  
  comparePasswords(fb:FormGroup){
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if(confirmPswrdCtrl?.errors == null || 'passwordMismatch' in confirmPswrdCtrl?.errors){
      if(fb.get('Password')?.value != confirmPswrdCtrl?.value)
        confirmPswrdCtrl?.setErrors({passworMismatch: true});
      else
        confirmPswrdCtrl?.setErrors(null);
    }
  }
  
  register(){
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.httpClient.post(routes.register(),body);
  }

  login_new(authCredentials: any) {
    return this.httpClient.post(routes.loginnew(), authCredentials);
  }

  login(email:string,password:string,returnUrl:string) : Observable<any>{
      let loginRequest = new LoginRequest();
      loginRequest.email = email;
      loginRequest.password = password;
      // loginRequest.returnUrl = returnUrl
      
      return this.httpClient.post<any>(routes.login(),loginRequest,noAuthHeader);
  }

  getUser():Observable<any>{
    let token = localStorage.getItem('token');
    return this.httpClient.get<any>(routes.getUser(),{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }
  startSignoutMainWindow():Observable<any>{
    let token = localStorage.getItem('token');
    return this.httpClient.post<any>(routes.logout(),null,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    return localStorage.getItem('token')!=null;
    // var userPayload = this.getUserPayload();
    // console.log(userPayload);
    
    // if (userPayload)
    //   return userPayload.exp > Date.now() / 1000;
    // else
    //   return false;
  }
}
