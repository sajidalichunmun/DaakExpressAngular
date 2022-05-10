import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-franchises',
  templateUrl: './franchises.component.html',
  styleUrls: ['./franchises.component.css']
})
export class FranchisesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClose(){
    this.router.navigateByUrl('/');
  }
}
