import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {RouterModule} from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import {HttpClientModule} from "@angular/common/http";
import { PaeseComponent } from './components/paese/paese.component';
import { MenuComponent } from './components/menu/menu.component';

const routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "paese", component: PaeseComponent},
  {path: "about", component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PaeseComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
