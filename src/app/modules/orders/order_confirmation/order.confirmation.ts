import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'order-confirm',
  templateUrl: './order.confirmation.html',
  styleUrls: ['./order.confirmation.scss']
})
export class OrderConfirmComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
}

