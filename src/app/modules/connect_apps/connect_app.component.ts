import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'connect-app',
  templateUrl: './connect_app.component.html',
  styleUrls: ['./connect_app.component.scss']
})
export class ConnectAppComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }
  show = false;

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  onChange(event) {
    this.show = event;
  }
  back() {
    this.router.navigate(['sync_devices']);
  }
  front() {
    this.router.navigate(['voice_audio']);
  }
}

