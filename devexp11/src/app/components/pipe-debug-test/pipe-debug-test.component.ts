import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-debug-test',
  templateUrl: './pipe-debug-test.component.html',
  styleUrls: ['./pipe-debug-test.component.scss']
})
export class PipeDebugTestComponent implements OnInit {

  testo = "ciao"

  constructor() { }

  ngOnInit() {
  }

  cambiaTesto(){
    this.testo = Math.random() + " ciao"
  }

}
