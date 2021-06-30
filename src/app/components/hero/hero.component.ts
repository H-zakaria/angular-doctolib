import { Component, OnInit } from '@angular/core';
import { faUser, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  faUser = faUser;
  faQuestionCircle = faQuestionCircle;
  constructor() {}

  ngOnInit(): void {}
}
