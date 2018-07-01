import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  datoPerSecondoComponente = {nome: "Salvatore"}


  loggaEvento(e){
    console.log(e)
  }
}
