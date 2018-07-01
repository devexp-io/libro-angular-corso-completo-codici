import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent implements OnInit {

  @Input()
  user:Utente


  constructor() { }

  ngOnInit() {
  }

}

export interface Utente {
  nome:string
  cognome:string
  eta:number
  color?:string
}












