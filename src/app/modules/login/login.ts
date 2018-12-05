import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
  }
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        // Validators.email,
      ]),
      'password': new FormControl('', Validators.required)
    });

  }
  ngOnDestroy(): void {

  }

}

