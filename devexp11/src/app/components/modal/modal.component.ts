import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  id = Math.random()

  @Input()
  title = ""

  @Output()
  close = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
