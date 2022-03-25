import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/acount/account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls:[ './sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model ={
    name :'idadmin',
    password:'@jpS?;BPQ~&7rM!'
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string = '';
  
  constructor(public userService: AccountService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    alert('login');
    this.userService.login(form.value,"","").subscribe({
      next:(res:any)=>{
        console.log(res);
      }
    })
  }
}

  