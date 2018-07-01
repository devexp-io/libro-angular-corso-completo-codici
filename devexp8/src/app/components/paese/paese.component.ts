import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-paese',
  templateUrl: './paese.component.html',
  styleUrls: ['./paese.component.css']
})
export class PaeseComponent implements OnInit {

  paese: any;

  constructor(private routed: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    this.routed.queryParams.subscribe(params => {
      console.log(params.nome)
      this.api.loadCountryInfo(params.nome).subscribe(res => {
        console.log(res)
        this.paese = res[0]
      }, err => {
        console.log(err)
      })
    })
  }

}
