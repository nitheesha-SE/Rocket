import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  login() {
    this.router.navigate(['home']);
  }
}

