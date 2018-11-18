import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'voice_audio',
  templateUrl: './voice_audio.component.html',
  styleUrls: ['./voice_audio.component.scss']
})
export class VoiceAudioComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  disabled = true
  show1=true;
  show2=false;
  show3=false;
  show4=false;
  someKeyboard={}

  someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: true,  // same as [keyboard]="true"
    step: 0.1,
    pageSteps: 10,  // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 5
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true
    }
  }

  onChange(event){
    this.disabled=!event;
  }

  tab(trigger, event, index){
    console.log(trigger, event);

    this.show1=false;
    this.show2=false;
    this.show3=false;
    this.show4=false;
    this["show" + index] = true;
    console.log(this);
  }
}

