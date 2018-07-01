import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get("https://restcountries.eu/rest/v2/all")
  }

  loadCountryInfo(name:string){
    return this.http.get("https://restcountries.eu/rest/v2/name/" + name)
  }
}
