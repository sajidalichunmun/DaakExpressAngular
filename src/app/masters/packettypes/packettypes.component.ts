import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packettypes',
  templateUrl: './packettypes.component.html',
  styleUrls: ['./packettypes.component.css']
})
export class PackettypesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClose(){
    this.router.navigateByUrl('/');
  }
}
