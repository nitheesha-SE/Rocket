import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import nouislider from 'nouislider'

@Component({
  selector: 'voice_audio',
  templateUrl: './voice_audio.component.html',
  styleUrls: ['./voice_audio.component.scss']
})
export class VoiceAudioComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }
  disabled = true;
  show1 = true;
  show2 = false;
  show3 = false;
  show4 = false;
  someKeyboard = {};

  someKeyboardConfig: any = {
    start: 20,
    orientation: 'vertical',
    range: {
      'min': 0,
      'max': 100
    },
  };

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  onChange(event) {
    this.disabled = !event;
  }

  tab(trigger, event, index) {
    console.log(trigger, event);

    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this['show' + index] = true;
    if (index === 4) {
      setTimeout(() => {
        this.renderSlider();
      }, 100);
    }
  }

  renderSlider() {
    nouislider.create(document.getElementById('slider_db'), {
      start: 20,
      orientation: 'vertical',
      range: {
        'min': 0,
        'max': 100
      },
      direction: $('html').attr('dir') === 'rtl' ? 'rtl' : 'ltr'
    });
  }

  front() {
    this.router.navigate(['']);
  }

  back() {
    this.router.navigate(['home']);
  }
}

