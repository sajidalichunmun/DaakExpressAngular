import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.css']
})
export class MajorsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClose(){
    this.router.navigateByUrl('/');
  }
}
