import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private _message: string;

  constructor() { }

  set message(value:string){
    this._message = value
  }

  get message(){
    return this._message
  }
}
