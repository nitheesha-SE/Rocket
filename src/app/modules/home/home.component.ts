import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getFoods().subscribe((data) => {

    });
  }
  ngOnDestroy(): void {

  }
  trigger(val) {
    if (val === 'connect_devices') {
      this.router.navigate([`sync_devices`]);
    } else {
      this.router.navigate([val]);
    }
  }
  save() {
    this.router.navigate(['order/complete']);
  }

  getFoods() {
    return this.http.get('/api/info').pipe();
  }
}

