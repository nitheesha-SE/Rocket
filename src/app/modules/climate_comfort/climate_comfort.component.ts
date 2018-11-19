import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'climate_comfort',
  templateUrl: './climate_comfort.component.html',
  styleUrls: ['./climate_comfort.component.scss']
})
export class CimateComfortComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }
  heading_title= "Climate"
  step1=true
  step2=false

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

}

