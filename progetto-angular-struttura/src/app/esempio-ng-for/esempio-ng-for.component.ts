import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esempio-ng-for',
  templateUrl: './esempio-ng-for.component.html',
  styleUrls: ['./esempio-ng-for.component.scss']
})
export class EsempioNgForComponent implements OnInit {

  utenti = [{nome: "Salvatore", cognome: "Romeo",  eta: 33}, {nome: "Mario", cognome: "Rossi", eta: 46}]


constructor() { }

  ngOnInit() {
  }

}
