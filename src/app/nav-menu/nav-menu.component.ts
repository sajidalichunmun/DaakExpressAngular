import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/acount/account.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  isLoggedIn = false;
  showAdminMenu = false;
  currentUser: any;

  constructor(protected authService: AccountService,private routeService: Router) {
  }

  ngOnInit() {
    if(this.authService.isLoggedIn() && this.isLoggedIn === false){
    
    this.authService.getUser().subscribe(
      (res) =>{
        this.isLoggedIn = true;
        this.currentUser = res.data.name;
        this.showAdminMenu = true;// this.authService.currentUser?.profile["role"] === 'identity-admin'
      });
    }
  }

  get displayName(): string {
    return this.currentUser;
  }


  login() {
    this.routeService.navigateByUrl('login');
    //this.authService.startSigninMainWindow();
  }

  logout() {
    this.authService.startSignoutMainWindow().subscribe(
      (res) =>{
        localStorage.removeItem('token');
        localStorage.clear();
        window.location.replace('/');
      }
    )
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

