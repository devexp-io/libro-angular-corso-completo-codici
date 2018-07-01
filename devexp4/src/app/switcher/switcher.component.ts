import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {

  @Input()
  value: boolean

  @Output()
  valueChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

}
