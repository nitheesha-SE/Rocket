import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  trigger(val){
    console.log("temps")
    if(val === "connect_devices"){
      this.router.navigate([`/sync_devices/${val}`]);
    } else{
      this.router.navigate([val]);
    }

  }
}

