import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packets-status',
  templateUrl: './packets-status.component.html',
  styleUrls: ['./packets-status.component.css']
})
export class PacketsStatusComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClose(){
    this.router.navigateByUrl('/');
  }
}

