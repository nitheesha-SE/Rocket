import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

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
  syncIPhone = false
  disabled = true

  onChange(event){
    this.disabled=!event;
  }
}

