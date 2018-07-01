import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: any[]

  constructor(private routed: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    this.routed.queryParams.subscribe(params => {
      console.log(params)
    })

    const onSuccess = (res) => {
      this.countries = res
    }
    const onError = (err) => {
      console.log(err)
    }
    this.api.getCountries().subscribe(onSuccess, onError)
  }


}
