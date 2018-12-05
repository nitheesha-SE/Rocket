import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sync-devices',
  templateUrl: './sync_devices.component.html',
  styleUrls: ['./sync_devices.component.scss']
})
export class SyncDevicesComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }
  syncIPhone = false;
  disabled = true;

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  onChange(event) {
    this.disabled = !event;
  }
  
  back() {
    this.router.navigate(['connect_apps']);
  }
  front() {
    this.router.navigate(['charging_settings']);
  }
}

