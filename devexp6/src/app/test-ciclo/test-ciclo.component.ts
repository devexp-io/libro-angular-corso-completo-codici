import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-ciclo',
  templateUrl: './test-ciclo.component.html',
  styleUrls: ['./test-ciclo.component.css']
})
export class TestCicloComponent implements OnInit, OnDestroy {

  @Input()
  testo: string
  intervallo: any

  constructor() {
    console.log("in costruttore", this.testo)

    this.intervallo = setInterval(()=>{
      console.log("messaggio nell'intervallo")
    }, 1000)
  }

  ngOnInit() {
    console.log("in ngOnInit", this.testo)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervallo)
  }
}
