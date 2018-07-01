import {Component} from '@angular/core';
import {ILoginResult, LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  log(m) {
    console.log(m)
  }



}
