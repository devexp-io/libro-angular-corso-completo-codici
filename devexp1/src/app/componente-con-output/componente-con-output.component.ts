import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'componente-con-output',
  templateUrl: './componente-con-output.component.html',
  styleUrls: ['./componente-con-output.component.scss']
})
export class ComponenteConOutputComponent implements OnInit {

  @Output()
  evento = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.evento.emit("ciao")
  }

}
