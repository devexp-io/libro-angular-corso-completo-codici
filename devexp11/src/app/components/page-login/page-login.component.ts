import {Component, OnInit} from '@angular/core';
import {ILoginResult, LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {

  constructor(private loginService: LoginService, private router: Router) {
  }

  tryLogin(username: string, password: string) {

    let loginResultHandler = (result: ILoginResult) => {
      if (result.success) {
        this.router.navigateByUrl("home")
      } else {
        //show message error in the login page
      }
    }

    this.loginService.login(username, password, loginResultHandler)
  }

}
