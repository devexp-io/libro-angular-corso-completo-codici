import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  variabileBooleana: boolean

  user = {username: "", anno: 0}

  numeroSelezionato: number

  utenti: any[] = [
    {nome: "Sa", cognome: "Ro", eta: 33, color: "#6ac2ff"},
    {nome: "Ma", cognome: "Bi", eta: 31, color: "#ff7474"},
    {nome: "Fa", cognome: "Ma", eta: 17, color: "#ecff73"},
    {nome: "Be", cognome: "Ca", eta: 6, color: "#80ffb0"}
  ]

  utenteSelezionato = this.utenti[1]
  erroreInput1: boolean;

  stampaForm(e) {
    console.log(e)
  }

  controllaUsername() {
    this.erroreInput1 = false
    if (!this.user.username)
      this.erroreInput1 = true
  }


  nuovoUtente: {nome?: string, cognome?:string, eta?:number} = {}

  validaESalva(){
    this.utenti.push({...this.nuovoUtente})
    this.nuovoUtente = {}
  }
}
