import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {PageHomeComponent} from "./components/page-home/page-home.component";
import {PageAboutComponent} from "./components/page-about/page-about.component";
import {ActiveDirective} from './directives/active.directive';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PageLoginComponent} from './components/page-login/page-login.component';
import {LoginComponent} from "./components/login/login.component";
import {GoogleMapComponent} from './components/google-map/google-map.component';
import {PageMapComponent} from './components/page-map/page-map.component';
import {LoadingComponent} from './components/loading/loading.component';
import {ModalComponent} from './components/modal/modal.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {PageTableComponent} from './components/page-table/page-table.component';
import {PageI18nComponent} from './components/page-i18n/page-i18n.component';

import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

const routes = [
  {path: "", component: PageHomeComponent},
  {path: "home", component: PageHomeComponent},
  {path: "login", component: PageLoginComponent},
  {path: "map", component: PageMapComponent},
  {path: "table", component: PageTableComponent},
  {path: "translate", component: PageI18nComponent},
  {path: "about", component: PageAboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageAboutComponent,
    ActiveDirective,
    PageLoginComponent,
    LoginComponent,
    GoogleMapComponent,
    PageMapComponent,
    LoadingComponent,
    ModalComponent,
    PageTableComponent,
    PageI18nComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes, {useHash: true}), HttpClientModule, Ng2SmartTableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('it');
    translate.use('it');
  }
}
