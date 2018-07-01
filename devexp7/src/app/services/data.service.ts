import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  utenti: Utente[] = [
    {nome: "Sa", cognome: "Ro", eta: 33, color: "#6ac2ff"},
    {nome: "Ma", cognome: "Bi", eta: 31, color: "#ff7474"},
    {nome: "Fa", cognome: "Ma", eta: 17, color: "#ecff73"},
    {nome: "Be", cognome: "Ca", eta: 6, color: "#80ffb0"}
  ]

  constructor() { }
}

export interface Utente {
  nome:string
  cognome:string
  eta:number
  color?:string
}
