import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EsempioNgForComponent } from './esempio-ng-for/esempio-ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    EsempioNgForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
