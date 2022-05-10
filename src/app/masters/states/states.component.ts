import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClose(){
    this.router.navigateByUrl('/');
  }
}
