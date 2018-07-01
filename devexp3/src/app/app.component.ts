import { Component } from '@angular/core';
import {Utente} from "./utente/utente.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  utenti: Utente[] = [
    {nome: "Sa", cognome: "Ro", eta: 33, color: "#6ac2ff"},
    {nome: "Ma", cognome: "Bi", eta: 31, color: "#ff7474"},
    {nome: "Fa", cognome: "Ma", eta: 17, color: "#ecff73"},
    {nome: "Be", cognome: "Ca", eta: 6, color: "#80ffb0"}
  ]

  mostraCognomiUtenti = true
}
