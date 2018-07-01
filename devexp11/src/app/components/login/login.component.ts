import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output()
  login = new EventEmitter<{ username: string, password: string }>()

  error: boolean;

  doLogin(username: string, password: string) {
    delete this.error
    if (!username || !password){
      this.error = true
      return false
    }
    else
      this.login.emit({username, password})

  }

}
