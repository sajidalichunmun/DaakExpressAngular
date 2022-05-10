import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-cities',
  templateUrl: './sub-cities.component.html',
  styleUrls: ['./sub-cities.component.css']
})
export class SubCitiesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClose(){
    this.router.navigateByUrl('/');
  }
}
