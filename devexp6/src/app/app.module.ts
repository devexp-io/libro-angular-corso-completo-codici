import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCicloComponent } from './test-ciclo/test-ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCicloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
