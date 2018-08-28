import { Component, OnInit } from '@angular/core';
import { faDesktop, faMobileAlt, faPencilRuler, faFileCode, faRandom, faChartLine, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faLess, faSass, faJs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: '[app-what-we-do]',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {
  faDesktop = faDesktop;
  faMobileAlt = faMobileAlt;
  faPencilRuler = faPencilRuler;
  faFileCode = faFileCode;
  faLess = faLess;
  faSass = faSass;
  faJs = faJs;
  faRandom = faRandom;
  faChartLine = faChartLine;
  faEnvelopeOpen = faEnvelopeOpen;
  
  constructor() { }

  ngOnInit() {
  }

}
