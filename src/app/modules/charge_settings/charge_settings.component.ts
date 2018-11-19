import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'charge_settings',
  templateUrl: './charge_settings.component.html',
  styleUrls: ['./charge_settings.component.scss']
})
export class ChargingSettingsComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  show = false

  onChange(event){
    this.show = event;
  }
}

