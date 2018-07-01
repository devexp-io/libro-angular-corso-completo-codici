import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'componente-con-input',
  templateUrl: './componente-con-input.component.html',
  styleUrls: ['./componente-con-input.component.scss']
})
export class ComponenteConInputComponent implements OnInit {

  @Input()
  dato:string
  constructor() { }

  ngOnInit() {
  }

}
