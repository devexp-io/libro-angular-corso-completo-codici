import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.scss']
})
export class PageMapComponent implements OnInit {

  markers = [{
    lat: 41.890251,
    lng: 12.492373
  }]

  constructor() { }

  ngOnInit() {
  }

}
