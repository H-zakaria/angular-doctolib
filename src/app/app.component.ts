import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'doctolib';
  ngOnInit() {
    this.playAudio();
  }

  playAudio() {
    let audio = new Audio();
    audio.src = '../app/ressources/audio/darkestDJMainTheme.mp3';
    audio.load();
    audio.play();
  }
}
