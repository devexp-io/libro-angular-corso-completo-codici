import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

declare var google: any

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements AfterViewInit {

  @ViewChild("mapRef")
  mapDivElementRef: ElementRef




  private map: any




  constructor() {
  }

  ngAfterViewInit(): void {
    let mapDiv = this.mapDivElementRef.nativeElement
    this.map = new google.maps.Map(mapDiv, {zoom: 6});
    google.maps.event.addListenerOnce(this.map, 'idle', () =>{
      this.updateMarkers()
    });
  }


  markers = []

  @Input()
  locations: { lat: number, lng: number }[]

  private updateMarkers() {
    // reset all markers
    for (let m of this.markers)
      m.setMap(null)
    this.markers = []

    // add markers
    for (let l of this.locations) {
      let m = new google.maps.Marker({map: this.map});
      m.setPosition(l)
      this.markers.push(m)
    }

    const bounds = new google.maps.LatLngBounds()
    this.locations.forEach(l => bounds.extend(l))
    this.map.fitBounds(bounds)
    this.map.setZoom(16)
  }
}
