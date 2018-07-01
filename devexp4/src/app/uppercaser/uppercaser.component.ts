import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-uppercaser',
  templateUrl: './uppercaser.component.html',
  styleUrls: ['./uppercaser.component.css']
})
export class UppercaserComponent implements OnInit {

  @Input()
  testo:string

  @Output()
  testoChange = new EventEmitter<string>()

  trasformaInUppercase(){
    let testoTrasformato = this.testo.toUpperCase()
    this.testoChange.emit(testoTrasformato)
  }

  constructor() { }

  ngOnInit() {
  }

}
