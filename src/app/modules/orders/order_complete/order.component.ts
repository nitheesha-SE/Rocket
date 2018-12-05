import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'order-complete',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderCompleteComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  back() {
    this.router.navigate(['home']);
  }
  complete(){
    this.router.navigate(['order/confirm']);
  }
  sync_devices() {
    this.router.navigate([`sync_devices`]);
  }
  charging() {
    this.router.navigate(['charging_settings']);
  }
  apps() {
    this.router.navigate(['connect_apps']);
  }
}

