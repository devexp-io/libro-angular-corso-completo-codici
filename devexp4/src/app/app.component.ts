import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dati = {
    booleano: true
  }

  utente = {
    nome: "Sa"
  }


  utenteClonato: { nome: string };

  ngOnInit(){
    this.utenteClonato = {...this.utente}
  }
}





