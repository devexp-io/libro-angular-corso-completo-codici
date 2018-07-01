import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = "http://....." //l'URL del server API
  private TOKEN_KEY = "TOKEN_KEY" //può essere qualunque stringa

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string, handler: (result: ILoginResult) => void) {
    this.http.post(this.loginUrl, {email, password}).subscribe((res: any) => {
      if (res.token) {
        localStorage.setItem(this.TOKEN_KEY, res.token)
      }
      handler({success: true, error: false, token: res.token})
    }, err => {
      handler({success: false, error: true})
    })
  }

  get tokenData() {
    let token = localStorage.getItem(this.TOKEN_KEY)
    if (token) {
      return JSON.parse(atob(token.split(".")[1]))
    }
    return {}
  }

  isLogged() {
    let token = localStorage.getItem(this.TOKEN_KEY)
    if (!token)
      return false
    let secondToExpire = (this.tokenData.exp - new Date().getTime()) * 1000
    return secondToExpire > 1
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY)
  }
}

export interface ILoginResult {
  success: boolean,
  error: boolean
  token?: string
}
