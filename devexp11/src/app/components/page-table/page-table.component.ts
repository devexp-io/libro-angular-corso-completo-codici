import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {
  settings: any

  utenti: any[] = [
    {nome: "Sa", cognome: "Ro", eta: 33, color: "#6ac2ff"},
    {nome: "Ma", cognome: "Bi", eta: 31, color: "#ff7474"},
    {nome: "Fa", cognome: "Ma", eta: 17, color: "#ecff73"},
    {nome: "Be", cognome: "Ca", eta: 6, color: "#80ffb0"}
  ]

  constructor() { }

  ngOnInit() {
    this.settings = {
      columns: {
        nome: {
          title: 'Nome'
        },
        cognome: {
          title: 'Cognome'
        },
        eta: {
          title: 'Età'
        }
      }
    };
  }

}
