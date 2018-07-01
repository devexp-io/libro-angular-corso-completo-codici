import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lowercaser',
  templateUrl: './lowercaser.component.html',
  styleUrls: ['./lowercaser.component.css']
})
export class LowercaserComponent implements OnInit {

  @Input()
  testo: string

  @Output()
  testoChange = new EventEmitter<string>()


  trasformaInLowercase(){
    let testoTrasformato = this.testo.toLowerCase()
    this.testoChange.emit(testoTrasformato)
  }


  constructor() {
  }

  ngOnInit() {
  }

}
