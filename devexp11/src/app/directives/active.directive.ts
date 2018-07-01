import {AfterViewInit, Directive, ElementRef} from '@angular/core';
import {Router} from "@angular/router";


@Directive({
  selector: '[active]'
})
export class ActiveDirective implements AfterViewInit {
  constructor(private _elementRef: ElementRef, private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe(e => {
      this.checkClass()
    });
    this.checkClass()
  }

  private checkClass() {
    try {
      let a = this._elementRef.nativeElement
      if (!a.className)
        a.className = ""

      a.className = a.className.replace(/active/g, '') // togli la classe active se esiste
      let href = a.attributes.href
      if (href && (location.hash.indexOf(href.value) >= 0
        || ("/" + location.hash).indexOf(href.value) >= 0))
        a.className += " active";
    } catch (e) {
      console.log(e)
    }
  }
}
