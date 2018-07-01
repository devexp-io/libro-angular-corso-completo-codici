import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appLogInput]'
})
export class LogInputDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.element)
  }



}
