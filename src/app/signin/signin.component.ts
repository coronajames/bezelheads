import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    this.route.navigate(['signup']);
  }
  signin() {
    this.route.navigate(['home']);
  }
}
